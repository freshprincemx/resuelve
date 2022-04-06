const { response } = require("express");
const { Nivel } = require('../models');

const obtenerNiveles = async (req, res = response) => {
    const {limite = 5, desde = 0} = req.query;
    const query = {estado: true};
    const [total, niveles] = await Promise.all([
        Nivel.countDocuments(query),
        Nivel.find(query, 'nivel golesxmes')
                .skip(Number(desde))
                .limit(Number(limite))
    ]);
    res.json({
        total,
        niveles
    })
}

const obtenerNivel = async (req, res = response) => {
    const {id} = req.params;
    const nivel = await Nivel.findById(id, 'nivel golesxmes');
    res.json(nivel);
}


const obtenerGolesxNivel = async (n = '') => {
    const goles = await Nivel.findOne({nivel: n}, 'golesxmes');
    return (goles)?goles.golesxmes:0;
}

const crearNivel = async (req, res = response) => {
    const body = req.body;
    const nivelDB = await Nivel.findOne({nivel: body.nivel.toUpperCase()});
    
    if(nivelDB){
        res.status(400).json({
            msg: `El nivel ${nivelDB.nivel}, ya existe`
        });
    }
    const data = {
        nivel: body.nivel.toUpperCase(),
        golesxmes: body.golesxmes
    }
    console.log(data);
    const nivel = new Nivel(data);
    await nivel.save();
    res.status(201).json(nivel);

}

const actualizarNivel = async (req, res = response) => {
    const {id} = req.params;
    const {__v, estado, ...data} = req.body;

    if(data.nivel){
        data.nivel = data.nivel.toUpperCase();
    }

    const nivel = await Nivel.findByIdAndUpdate(id, data, {new:true});
    res.json(nivel);
}

const borrarNivel = async (req, res = response) => {
    const {id} = req.params;
    const nivelBorrado = await Nivel.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(nivelBorrado);
}

module.exports = {
    crearNivel,
    obtenerNiveles,
    obtenerNivel,
    actualizarNivel,
    borrarNivel,
    obtenerGolesxNivel
}