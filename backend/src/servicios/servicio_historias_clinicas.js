const { HistoriaClinicaDAO } = require('../dao/historia_clinica_dao');

class ServicioHistoriasClinicas {
  constructor() {
    this.dao = new HistoriaClinicaDAO();
  }

  listar() {
    return this.dao.listar();
  }

  obtener(id) {
    return this.dao.obtener(id);
  }

  crear(dto) {
    return this.dao.crear(dto);
  }

  actualizar(id, dto) {
    return this.dao.actualizar(id, dto);
  }

  eliminar(id) {
    return this.dao.eliminar(id);
  }
}

module.exports = { ServicioHistoriasClinicas };
