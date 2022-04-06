# Prueba Ingeniería Resuelve

Solución propuesta a la prueba para aplicar a la vacante de Ingeniero de Software en [Resuelve Tu Deuda](https://resuelvetudeuda.com/) 

##  Versión Productiva

Liga a la API productiva publicada en Heroku:

```sh 
https://resuelve.herokuapp.com/
```

##  Documentación de la API

```sh 
https://documenter.getpostman.com/view/8655165/UVyvuuJS
```

## Instalación local

Clonar el proyecto desde GitHub:

```sh 
git clone https://github.com/freshprincemx/resuelve.git
```

Se requiere [Node.js](https://nodejs.org/) v16+

Instalar las dependencias y levantar el servidor

```sh
npm install
node app
```

Para ambiente productivo

```sh
npm install --production
NODE_ENV=production node app
```

## Tecnologías utilizadas  

| Tecnología | Funcionalidad |
| ------ | ------ |
| [Node.js](https://nodejs.org/) | Node.js es un entorno de ejecución de un solo hilo, de código abierto y multiplataforma para crear aplicaciones de red y del lado del servidor rápidas y escalables. Se ejecuta en el motor de ejecución de JavaScript V8, y utiliza una arquitectura de E/S basada en eventos y sin bloqueos, lo que la hace eficiente y adecuada para aplicaciones en tiempo real.|
| [Express](https://expressjs.com/es/) | Express.js es un framework web back-end para Node.js, está diseñado para crear aplicaciones web y API. |
| [Cors](https://expressjs.com/en/resources/middleware/cors.html) | CORS es un paquete de node.js para proporcionar un middleware Connect/Express que se puede usar para habilitar CORS con varias opciones. |

