const express = require('express');
const ClienteControlador = require('../controlador/ClienteControlador');
const router = express.Router();

router.post('/usuarios', ClienteControlador.crearCliente);

module.exports = router; 