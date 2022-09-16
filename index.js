import express from 'express';
import router from "./routes/index.js";
import db from './config/db.js';


const app = express();

//Conectar a BBDD
db.authenticate()
    .then( () => {
        console.log('BBDD conectada')
    })
    .catch( error => console.error(error));

let port = 3000;
const portArg = process.argv[2];

if (portArg !== undefined && !Number.isNaN(parseInt(portArg, 10))) {
    port = parseInt(portArg, 10);
}

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const currentYear = new Date();
    res.locals.year = currentYear.getFullYear();
    res.locals.nombresitio = "Agencia de viajes"

    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router);


app.listen(port,() => {
    console.log(`El servidor esta corriendo en ${port}`);
});