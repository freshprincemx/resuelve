# Prueba Ingeniería Resuelve

Solución propuesta a la prueba para aplicar a la vacante de Ingeniero de Software en [Resuelve Tu Deuda](https://resuelvetudeuda.com/).

El release v1.0.0 contiene la version básica de la solución la cual obtiene la información de niveles y goles por medio de un archivo json y se realiza el cálculo de sueldo completo utilizando el método GET.

El release v1.1.1 contiene las siguentes mejoras:

- Se calcula el sueldo de los jugadores de otros equipos con distintos mínimos por nivel
- Se agrega base de datos Mongo Atlas para almacenar la información de niveles, usuarios y roles
- Se agrega autenticación por Login (usuario/contraseña) para generación de JWT y protección de rutas
- Se agregan middlewares para validar la información de las peticiones
- Se agrega CRUD de usuarios y niveles
- Se valida que el porcentaje del bono no exceda el 100%

##  Versión Productiva

Liga a la API productiva publicada en Heroku:

```sh 
https://resuelve.herokuapp.com/
```

##  Documentación de la API

```sh 
https://documenter.getpostman.com/view/8655165/UVyuQuM2
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

## Usuarios:

Usuarios de prueba para autenticación con login y generación de JWT:

```sh
{
    "correo": "resuelve@mail.com",
    "password": "123456",
    "rol": "ADMIN_ROLE"
},
{
    "correo": "usuario@mail.com",
    "password": "123456",
    "rol": "USER_ROLE"
},
{
    "correo": "sinhue@mail.com",
    "password": "123456",
    "rol": "ADMIN_ROLE"
}
```

## Tecnologías utilizadas  

| Tecnología | Funcionalidad |
| ------ | ------ |
| [Node.js](https://nodejs.org/) | Node.js es un entorno de ejecución de un solo hilo, de código abierto y multiplataforma para crear aplicaciones de red y del lado del servidor rápidas y escalables. Se ejecuta en el motor de ejecución de JavaScript V8, y utiliza una arquitectura de E/S basada en eventos y sin bloqueos, lo que la hace eficiente y adecuada para aplicaciones en tiempo real.|
| [Express](https://expressjs.com/es/) | Express.js es un framework web back-end para Node.js, está diseñado para crear aplicaciones web y API. |
| [MongoDB Atlas](https://www.mongodb.com/es/atlas/database) | Base de datos no relacional en la nube. |

