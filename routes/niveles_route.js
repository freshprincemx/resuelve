const {Router} = require('express');
const { check } = require('express-validator');
const { 
    obtenerNiveles,crearNivel, obtenerNivel, actualizarNivel, borrarNivel
} = require('../controllers/niveles_controller');
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');
const { existeNivel, existeNivelPorId } = require('../helpers');

const router = Router();


router.get('/',obtenerNiveles);

router.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeNivelPorId),
    validarCampos
], obtenerNivel);

router.post('/',
[ 
    validarJWT,
    check('nivel').custom(existeNivel),
    validarCampos
], crearNivel);                                     

router.put('/:id', [
    validarJWT,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeNivelPorId),
    validarCampos
], actualizarNivel);

router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeNivelPorId),
    validarCampos
],borrarNivel);

module.exports = router;