const bodyParser = require('body-parser');

const router = require('../routes');

//Este archivo configura Express. inicia el Bodyparser y asigna las rutas// 
function expressLoader(app) {

  app.use(bodyParser.json());

  app.use(router);

  app.use(function (req, res) {
    res.status(404).json({
      error: 'Not found'
    });
  });
}

module.exports = expressLoader;