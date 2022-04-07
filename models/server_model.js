const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth:       '/api/auth',
            niveles:    '/api/niveles',
            resuelve:   '/api/resuelve',
            usuarios:   '/api/usuarios'
        };
        // Conectar a base de datos
        this.conectarDB();
        // Middlewares
        this.middlewares();
        // Rutas de la aplicación
        this.routes();
    }
    async conectarDB(){
        await dbConnection();
    }
    middlewares() {
        // CORS
        this.app.use(cors());
        // Parseo y lectura del Body
        this.app.use(express.json());
    }
    routes() {
        this.app.use(this.paths.auth, require('../routes/auth_route'));
        this.app.use(this.paths.niveles, require('../routes/niveles_route'));
        this.app.use(this.paths.resuelve, require('../routes/resuelve_route'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios_route'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto:', this.port);
        });
    }
}

module.exports = Server;