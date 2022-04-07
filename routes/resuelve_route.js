const {Router} = require('express');
const { obtenerSalarioCompleto } = require('../controllers/resuelve_controller');
const { validarJWT } = require('../middlewares');

const router = Router();

router.get('/', obtenerSalarioCompleto);

router.get('/jwt', [validarJWT], obtenerSalarioCompleto);

module.exports = router;