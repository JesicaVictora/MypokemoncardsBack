const express = require('express');
const config = require('./config');
const loader = require('./loader');
const cors = require('cors');


function bootstraping() {
    const app = express();

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // creo que tambien hay que poner PATCH
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

   app.use(cors({
        origin: 'http://localhost:3001',
        credentials: true,
    }));

    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));

    const server = app.listen(config.server.port);

    server.on('error', onError);
    server.on('listening', async function () {
        console.info(`Server running on http://${config.server.host}:${config.server.port}`);
        await loader(app);
    });
}

function onError(serverError) {
    if (serverError.code === 'EACCES') {
        console.error(`${config.server.port} requires elevated privileges`);
    } else if (serverError.code === 'EADDRINUSE') {
        console.error(`${config.server.port} already in use`);
    } else {
        console.error(serverError);
    }
    process.exit(1);
}

bootstraping();