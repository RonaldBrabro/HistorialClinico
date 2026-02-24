const { ServicioHistoriasClinicas } = require('../servicios/servicio_historias_clinicas');
const { HistoriaClinicaDTO } = require('../dtos/historia_clinica_dto');

const servicio = new ServicioHistoriasClinicas();

const listar = (req, res) => {
  return res.json(servicio.listar());
};

const obtener = (req, res) => {
  const historia = servicio.obtener(req.params.id);
  if (!historia) {
    return res.status(404).json({ mensaje: 'Historia clinica no encontrada.' });
  }
  return res.json(historia);
};

const crear = (req, res) => {
  const dto = new HistoriaClinicaDTO(req.body);
  const creada = servicio.crear(dto);
  return res.status(201).json(creada);
};

const actualizar = (req, res) => {
  const dto = new HistoriaClinicaDTO(req.body);
  const actualizada = servicio.actualizar(req.params.id, dto);
  if (!actualizada) {
    return res.status(404).json({ mensaje: 'Historia clinica no encontrada.' });
  }
  return res.json(actualizada);
};

const eliminar = (req, res) => {
  const eliminada = servicio.eliminar(req.params.id);
  if (!eliminada) {
    return res.status(404).json({ mensaje: 'Historia clinica no encontrada.' });
  }
  return res.status(204).send();
};

module.exports = {
  listar,
  obtener,
  crear,
  actualizar,
  eliminar
};
