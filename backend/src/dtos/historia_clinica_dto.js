class HistoriaClinicaDTO {
  constructor(datos = {}) {
    this.encabezado = datos.encabezado || {};
    this.seccionA = datos.seccionA || {};
    this.seccionB = datos.seccionB || {};
    this.seccionC = datos.seccionC || {};
    this.seccionD = datos.seccionD || {};
    this.seccionE = datos.seccionE || {};
    this.seccionF = datos.seccionF || {};
    this.seccionG = datos.seccionG || {};
    this.seccionH = datos.seccionH || {};
    this.seccionI = datos.seccionI || {};
    this.seccionJ = datos.seccionJ || {};
    this.seccionK = datos.seccionK || {};
    this.seccionL = datos.seccionL || {};
    this.psicologiaEducativa = datos.psicologiaEducativa || {};
    this.fonoaudiologia = datos.fonoaudiologia || {};
    this.psicologiaClinica = datos.psicologiaClinica || {};
  }
}

module.exports = { HistoriaClinicaDTO };
