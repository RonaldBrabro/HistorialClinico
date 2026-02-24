const express = require('express');
const { login } = require('../controladores/controlador_autenticacion');

const enrutador = express.Router();

enrutador.post('/login', login);

module.exports = enrutador;
