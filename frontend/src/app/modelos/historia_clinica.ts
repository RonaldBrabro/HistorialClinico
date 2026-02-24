export interface EncabezadoHistoriaClinica {
  numeroHistoriaClinica: string;
  fecha: string;
}

export type SeccionFormulario = Record<string, any>;

export interface HistoriaClinica {
  id?: string;
  encabezado: EncabezadoHistoriaClinica;
  seccionA: SeccionFormulario;
  seccionB: SeccionFormulario;
  seccionC: SeccionFormulario;
  seccionD: SeccionFormulario;
  seccionE: SeccionFormulario;
  seccionF: SeccionFormulario;
  seccionG: SeccionFormulario;
  seccionH: SeccionFormulario;
  seccionI: SeccionFormulario;
  seccionJ: SeccionFormulario;
  seccionK: SeccionFormulario;
  seccionL: SeccionFormulario;
  psicologiaEducativa: SeccionFormulario;
  fonoaudiologia: SeccionFormulario;
  psicologiaClinica: SeccionFormulario;
}
