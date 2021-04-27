const express = require('express');

const router = express.Router();
const routesUser = require('./routes/RoutesUser');

router.use('/', routesUser);
router.route('/')
    .get((req, res) => {
        res.json({
            Mensaje: "welcome"
        });
    });

module.exports = router;