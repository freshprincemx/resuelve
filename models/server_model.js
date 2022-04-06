const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            resuelve:   '/api/resuelve'
        };
        // Middlewares
        this.middlewares();
        // Rutas de la aplicación
        this.routes();
    }
    middlewares() {
        // CORS
        this.app.use(cors());
        // Parseo y lectura del Body
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.paths.resuelve, require('../routes/resuelve_route'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto:', this.port);
        });
    }
}

module.exports = Server;