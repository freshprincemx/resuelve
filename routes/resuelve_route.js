const {Router} = require('express');
const { obtenerSalarioCompleto } = require('../controllers/resuelve_controller');

const router = Router();

router.get('/', obtenerSalarioCompleto);

module.exports = router;