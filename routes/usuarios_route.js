const {Router} = require('express');
const { check } = require('express-validator');
const { obtenerUsuarios, agregarUsuario, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios_controller');

const { validarCampos, validarJWT, esAdminRole, tieneRol } = require('../middlewares');

const { esRoleValido, emailExiste, existeUsuarioPorId } = require('../helpers/db_validations');

const router = Router();

router.get('/', obtenerUsuarios);

router.post('/', [
    validarJWT,
    esAdminRole,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y más de 6 letras').isLength({min:6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('rol').custom(esRoleValido),
    check('correo').custom(emailExiste),
    validarCampos
], agregarUsuario);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
], actualizarUsuario);

router.delete('/:id', [
    validarJWT,
    esAdminRole,
    tieneRol('ADMIN_ROLE', 'VENTAS_ROLE'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], borrarUsuario);

module.exports = router;