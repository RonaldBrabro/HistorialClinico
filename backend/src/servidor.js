const express = require('express');
const cors = require('cors');

const rutasAutenticacion = require('./rutas/rutas_autenticacion');
const rutasHistorias = require('./rutas/rutas_historias_clinicas');
const { validarJwt } = require('./middleware/validar_jwt');

const aplicacion = express();

aplicacion.use(cors());
aplicacion.use(express.json({ limit: '2mb' }));

aplicacion.get('/', (req, res) => {
  res.json({ mensaje: 'API Historia Clinica' });
});

aplicacion.use('/auth', rutasAutenticacion);
aplicacion.use('/historias-clinicas', validarJwt, rutasHistorias);

const puerto = process.env.PUERTO || 3000;
aplicacion.listen(puerto, () => {
  console.log(`Servidor iniciado en puerto ${puerto}`);
});
