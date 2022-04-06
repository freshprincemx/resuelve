const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const { Usuario } = require('../models');

const obtenerUsuarios = async (req = request, res = response) => {
    const {limite = 5, desde = 0} = req.query;
    const query = {estado: true};
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query).skip(Number(desde)).limit(Number(limite))
    ]);
    res.json({
        total,
        usuarios
    })
}
const agregarUsuario = async (req, res = response) => {
    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({nombre, correo,password, rol});
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    // Guardar en BD
    usuario.save();
    res.json({
        usuario
    })
}
const actualizarUsuario = async (req, res = response) => {
    const id = req.params.id;
    const {_id,password, ...resto} = req.body;
    // Validar ID contra BD
    if(password){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto);
    res.json(usuario)
}

const borrarUsuario = async (req, res = response) => {
    const {id} = req.params;
    const usuario = await Usuario.findByIdAndUpdate(id, {estado:false});
    const usuarioAutenticado = req.usuario;
    res.json({usuario, usuarioAutenticado})
}

module.exports = {
    obtenerUsuarios,
    agregarUsuario,
    actualizarUsuario, 
    borrarUsuario
}