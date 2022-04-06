const {Router} = require('express');

const router = Router();


router.get('/',(req, res) => {
    res.json({
        ok: true,
        msg: 'Peticion GET correcta'
    });
});

module.exports = router;