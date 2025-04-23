const express = require('express');
const cors = require('cors');
const rutacliente = require('./vista/ClienteRutas');
const path = require('path');
const app = express();



app.use(cors({
    origin: '*', // Cambiar ['http://tu.com', 'http://yo.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true // Habilita el envío de credenciales si es necesario
  }));



// Middleware para parseo de solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Rutas 
app.use('/', rutacliente);



//crear el servidor
const PORT = 3030
app.listen(PORT, () => {
    console.log (`Servidor Corriendo en http://localhost:${PORT}`) //lo que queremos ver por consola
}); 