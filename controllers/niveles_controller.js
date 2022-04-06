const { leerDB } = require('../helpers/archivos');

const obtenerGolesxNivel = async (n = '') => {
    const nivelesDB = leerDB();
    const golesNivel = nivelesDB.find(o => o.nivel === n);
    return (golesNivel)?golesNivel.meta_goles:0;
}

module.exports = {
    obtenerGolesxNivel
}