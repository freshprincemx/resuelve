const fs = require('fs');

const archivo = './db/data.json';

const leerDB = () => {
    if(!fs.existsSync(archivo)){
        return null;
    }
    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    return data;
}

module.exports = {
    leerDB
}