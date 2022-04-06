const { response } = require("express");
const { obtenerGolesxNivel } = require("../controllers/niveles_controller");

const obtenerSalarioCompleto = async (req, res = response) => {
    const jugadores = req.body.jugadores;
    if(!jugadores){
        return res.status(400).json({
            msg: 'Entrada JSON vacia'
        });
    }
    // Agregamos la meta de goles individual para cada jugador dependiendo su nivel
    for (let i = 0; i < jugadores.length; i++) {
        const goles = (jugadores[i].nivel)?await obtenerGolesxNivel(jugadores[i].nivel):jugadores[i].goles_minimos;
        jugadores[i].golesxmes = goles;
        
    }
    // Obtenemos los goles de cada equipo y su meta de goles por equipo
    const metasPorEquipo = jugadores.reduce((acc, cur) => {
        acc[cur.equipo] = acc[cur.equipo] || [];
        acc[cur.equipo].goles_equipo = (acc[cur.equipo].goles_equipo || 0) + cur.goles;
        acc[cur.equipo].meta_equipo = (acc[cur.equipo].meta_equipo || 0) + cur.golesxmes;
        return acc;
    }, {});
    // Generamos el JSON final con el calculo de sueldo completo
    let jugadoresFinal = jugadores.map(jugador => {
        const sueldoCompleto = calcularSueldoCompleto(jugador.sueldo, jugador.bono, jugador.goles, jugador.golesxmes, metasPorEquipo[jugador.equipo].goles_equipo, metasPorEquipo[jugador.equipo].meta_equipo);
        let obj = {
            "nombre":           jugador.nombre,
            "goles_minimos":    jugador.golesxmes,
            "goles":            jugador.goles,
            "sueldo":           jugador.sueldo,
            "bono":             jugador.bono,
            "sueldo_completo":  sueldoCompleto.toFixed(2),
            "equipo":           jugador.equipo
        };
        return obj;
    });

    res.status(200).json({
        jugadores: jugadoresFinal
    })
}

const calcularSueldoCompleto = (sueldo = 0, bono = 0, golesJugador = 0, metaJugador = 0, golesEquipo = 0, metaEquipo = 0) => {
    let porcentajeIndividual = (metaJugador>0)?golesJugador/metaJugador:0;
    let porcentajeEquipo = (metaEquipo>0)?golesEquipo/metaEquipo:0;
    const sueldoCompleto = sueldo + bono*((porcentajeIndividual+porcentajeEquipo)/2)
    return sueldoCompleto;
}

module.exports = {
    obtenerSalarioCompleto
}