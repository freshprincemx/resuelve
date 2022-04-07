const {Router} = require('express');
const { obtenerSalarioCompleto } = require('../controllers/resuelve_controller');
const { validarCampos, validarJWT, esAdminRole } = require('../middlewares');

const router = Router();

router.get('/',[
    validarJWT,
    esAdminRole,
    validarCampos
], obtenerSalarioCompleto);

module.exports = router;