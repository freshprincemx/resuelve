const bcryptjs = require("bcryptjs");
const { response } = require("express");
const { generarJWT } = require("../helpers");
const { Usuario } = require('../models');

const login = async (req, res = response) => {
    const {correo, password} = req.body;

    try {

        // Verificar si el correo existe
        const usuario = await Usuario.findOne({correo});
        if(!usuario){
            return res.status(400).json({
                msg: 'No se encuentra usuario registrado con ese correo electrónico'
            });
        }
        // Verificar si el usuario esta activo en la BD
        if(!usuario.estado){
            return res.status(400).json({
                msg: 'El usuario no se encuentra activo en el sistema'
            });
        }
        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if(!validPassword){
            return res.status(400).json({
                msg: 'La contraseña no es correcta'
            });
        }
        // Generar JWT
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador',
            error
        });
    }
}

module.exports = {
    login
}