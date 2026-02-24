import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilidadesFormulario } from '../../utilidades/utilidades-formulario';

@Component({
  selector: 'app-seccion-a',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion-a.component.html'
})
export class SeccionAComponent {
  @Input() grupo!: FormGroup;

  provincias = [
    'Azuay', 'Bolivar', 'Canar', 'Carchi', 'Chimborazo', 'Cotopaxi',
    'El Oro', 'Esmeraldas', 'Galapagos', 'Guayas', 'Imbabura', 'Loja',
    'Los Rios', 'Manabi', 'Morona Santiago', 'Napo', 'Orellana',
    'Pastaza', 'Pichincha', 'Santa Elena', 'Santo Domingo', 'Sucumbios',
    'Tungurahua', 'Zamora Chinchipe', 'Otro'
  ];

  estadosCiviles = [
    'Soltero',
    'Casado',
    'Divorciado',
    'Viudo',
    'Union libre',
    'Otro'
  ];

  situacionesLaborales = [
    'Estudiante',
    'Empleado publico',
    'Empleado privado',
    'Por cuenta propia',
    'Jubilado',
    'Desempleado (motivos de salud)',
    'Desempleado (otros motivos)',
    'Otros (especificar)'
  ];

  etiologiasDiscapacidad = [
    'Permanente',
    'Transitoria',
    'Congenita',
    'Adquirida',
    'Heredada'
  ];

  etiologiaDiscapacidadFisica = [
    'Aparato respiratorio',
    'Cardiovascular',
    'Digestivo',
    'Urinario',
    'Sistema metabolico',
    'Sistema inmunologico',
    'Sistema endocrino',
    'Sistema nervioso',
    'Sistema hematologico',
    'Multisistemico',
    'Enfermedades musculoesqueleticas',
    'Dermatologicas',
    'Reumatologicas',
    'Albinismo',
    'Ausencia seg. corporal',
    'Otro'
  ];

  etiologiaDiscapacidadIntelectual = [
    'Sindrome de Down',
    'X fragil',
    'Errores congenitos del metabolismo',
    'Malformaciones cerebrales',
    'Desnutricion grave embarazo',
    'Exposicion quimicos embarazo',
    'Complicaciones embarazo enfermedad madre',
    'Prematuridad grave muy bajo peso',
    'Hipoxia al nacer',
    'Parto dificil',
    'Trauma nacimiento',
    'Infecciones cerebrales',
    'Traumatismo craneal',
    'Desnutricion grave prolongada',
    'Baja estimulacion',
    'Otro'
  ];

  etiologiaDiscapacidadAuditiva = [
    'Mal formacion oidos',
    'Mutacion',
    'Sindrome acueducto vestibular',
    'Meningoencefalitis',
    'Albinismo',
    'Otitis',
    'Meningitis',
    'Laberintitis',
    'Sarampion',
    'Varicela',
    'Neurofibromatosis',
    'Parotiditis',
    'Sustancias ototoxicas',
    'Ruido',
    'Tumores',
    'Problemas medicos maternos embarazo',
    'Traumatismos oido',
    'Otro'
  ];

  especificidadAuditiva = [
    'Hipoacusia derecha',
    'Hipoacusia izquierda',
    'Hipoacusia bilateral',
    'Sordera derecha',
    'Sordera izquierda',
    'Sordera bilateral'
  ];

  etiologiaDiscapacidadVisual = [
    'Cataratas',
    'Glaucoma',
    'Lesiones ojo',
    'Ceguera cortical',
    'Infecciones',
    'Ambliopia',
    'Opacificacion corneal',
    'Miopia degenerativa',
    'Retinopatia genetica',
    'Retinitis pigmentosa',
    'Otro'
  ];

  especificidadVisual = [
    'Baja vision derecha',
    'Baja vision izquierda',
    'Baja vision bilateral',
    'Ceguera derecha',
    'Ceguera izquierda',
    'Ceguera bilateral'
  ];

  etiologiaDiscapacidadPsicosocial = [
    'T. Depresion',
    'Ansiedad',
    'Estres postraumatico',
    'Obsesivo compulsivo',
    'Alimentario',
    'Psicotico',
    'Bipolar',
    'Disociativo',
    'Desarrollo neurologico (autismo, asperger y otros)',
    'Personalidad',
    'Dual',
    'Mental por afeccion medica',
    'Otro'
  ];

  etiologiaDiscapacidadLenguaje = [
    'T. del desarrollo del lenguaje',
    'T. del lenguaje establecido',
    'T. que afectan al habla o voz',
    'Otro'
  ];

  primariosLenguaje = [
    'Trastornos sonidos del habla',
    'Trastorno del lenguaje'
  ];

  secundariosLenguaje = [
    'Hipoacusia',
    'Retardo mental',
    'Alteracion neurologica',
    'Disglosia',
    'Afasias adulto',
    'Hipoacusias postlocutivos',
    'Sindromes psiquiatricos',
    'Deterioro neuropsicologico',
    'Disartrias adulto',
    'Disfonias',
    'Disfemias'
  ];

  opcionesDiscapacidadMultiple = [
    'Visual + Auditivo',
    'Auditivo + Fisico',
    'Visual + Fisico',
    'Fisico + Intelectual',
    'Auditivo + Intelectual',
    'Visual + Intelectual',
    'Intelectual + Psicosocial',
    'Fisico + Psicosocial',
    'Auditivo + Psicosocial',
    'Visual + Psicosocial',
    'Otro'
  ];

  institucionesEducativas = [
    'UCACUE',
    'UDA',
    'UNAE',
    'U. Cuenca',
    'UPS',
    'Conservatorio',
    'Otros'
  ];

  carreras = [
    'Psicologia',
    'Educacion',
    'Fonoaudiologia',
    'Medicina',
    'Trabajo social',
    'Otra'
  ];

  constructor(public utilidades: UtilidadesFormulario) {}

  obtenerArray(nombre: string): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get(nombre));
  }
}
