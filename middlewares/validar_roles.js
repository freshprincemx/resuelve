const { response } = require("express")
const { request } = require("express");


const esAdminRole = (req = request, res = response, next) => {
    if(!req.usuario){
        return res.sendStatus(500).json({
            msg: 'Se quiere verificar el rol sin validar el token primero'
        });
    }
    const { rol, nombre} = req.usuario;
    if(rol !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg: `El usuario ${nombre} no es administrador - Acción no permitida`
        });
    }
    next();
}

const tieneRol = (...roles) => {
    return (req, res = response, next) => {
        if(!req.usuario){
            return res.sendStatus(500).json({
                msg: 'Se quiere verificar el rol sin validar el token primero'
            });
        }
        if(!roles.includes(req.usuario.rol)){
            return res.status(401).json({
                msg: `El servicio requiere alguno de estos roles: ${roles}`
            });
        }
        next();
    }
}

module.exports = {
    esAdminRole, 
    tieneRol
}