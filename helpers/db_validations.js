const { Usuario, Nivel, Role } = require('../models');

const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

const emailExiste = async(correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error(`El correo ${correo} ya está registrado en la BD`);
    }
}

const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id)
    if(!existeUsuario){
        throw new Error(`El id ${id} no existe`);
    }
}

const existeNivel = async(nivel = '') => {
    const nivelMayus = nivel.toUpperCase();
    const nivelDB = await Nivel.findOne({ nivel: nivelMayus });
    if(nivelDB){
        throw new Error(`El nivel ${nivelDB.nivel} ya está registrado en la BD`);
    }
}

const existeNivelPorId = async(id) => {
    const existeNivel = await Nivel.findById(id)
    if(!existeNivel){
        throw new Error(`El id ${id} no existe`);
    }
}

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeNivel,
    existeNivelPorId
}