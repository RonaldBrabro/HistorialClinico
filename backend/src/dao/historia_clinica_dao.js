const { generarId } = require('../utilidades/generar_id');

const historiasMemoria = [];

class HistoriaClinicaDAO {
  listar() {
    return historiasMemoria;
  }

  obtener(id) {
    return historiasMemoria.find((historia) => historia.id === id);
  }

  crear(dto) {
    const nuevaHistoria = { ...dto, id: generarId() };
    historiasMemoria.push(nuevaHistoria);
    return nuevaHistoria;
  }

  actualizar(id, dto) {
    const indice = historiasMemoria.findIndex((historia) => historia.id === id);
    if (indice === -1) {
      return null;
    }
    historiasMemoria[indice] = { ...dto, id };
    return historiasMemoria[indice];
  }

  eliminar(id) {
    const indice = historiasMemoria.findIndex((historia) => historia.id === id);
    if (indice === -1) {
      return null;
    }
    const [eliminada] = historiasMemoria.splice(indice, 1);
    return eliminada;
  }
}

module.exports = { HistoriaClinicaDAO };
