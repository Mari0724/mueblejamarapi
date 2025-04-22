const express = require('express');
const cors = require('cors');
const rutacliente = require('./vista/ClienteRutas');
// const path = require('path');
const app = express();


//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(bodyParser.json()); //jnson a html
app.use(cors());
app.use('/', indexDia);

//crear el servidor
const PORT = 3030
app.listen(PORT, () => {
    console.log (`Servidor Corriendo en http://localhost:${PORT}`) //lo que queremos ver por consola
}); 