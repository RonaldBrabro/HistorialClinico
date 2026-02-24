const express = require('express');
const controlador = require('../controladores/controlador_historias_clinicas');

const enrutador = express.Router();

enrutador.get('/', controlador.listar);
enrutador.get('/:id', controlador.obtener);
enrutador.post('/', controlador.crear);
enrutador.put('/:id', controlador.actualizar);
enrutador.delete('/:id', controlador.eliminar);

module.exports = enrutador;
