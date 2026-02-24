import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilidadesFormulario } from '../../utilidades/utilidades-formulario';

@Component({
  selector: 'app-psicologia-clinica',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './psicologia-clinica.component.html'
})
export class PsicologiaClinicaComponent {
  @Input() grupo!: FormGroup;

  expresionLenguaje = [
    'Palabras raras',
    'Lógico y claro',
    'Voz monótona',
    'Mal hablado',
    'Lento y teatral',
    'Pesimista',
    'Hiriente',
    'Charlatán',
    'Incoherente',
    'Verborrea',
    'Abatimiento',
    'Tensión',
    'Perplejidad',
    'Suspicacia',
    'Enfado',
    'Obscenidad',
    'Ecolalia',
    'Palilalia',
    'Dislalia simple',
    'Disartria',
    'Disfemia',
    'Mutismo selectivo',
    'Disfagia'
  ];

  habitosPersonales = [
    'Ensimismado',
    'Hay que guiarlo',
    'Molestoso',
    'Lento',
    'No desea hacer nada',
    'Hace cosas extrañas'
  ];

  conductaSocial = [
    'Aislado',
    'Participa en grupos',
    'Es violento',
    'Callado',
    'Amigable y cooperador',
    'Adaptable',
    'Inquieto',
    'Nervioso',
    'Tiene amigos íntimos'
  ];

  actividadesIntelectivas = [
    'Confuso',
    'Centrado en sí mismo',
    'Olvidadizo',
    'Piensa y responde bien',
    'Pocos pensamientos',
    'No ve los errores',
    'Actúa infantilmente',
    'Desconfía'
  ];

  aspectos = [
    'Hosco',
    'Fastidiado',
    'Cansado',
    'Viste raramente',
    'Desordenado',
    'Desaliñado',
    'Aseo no adecuado',
    'Exceso de ropas',
    'Dramático y teatral',
    'Viste normalmente',
    'Impecable'
  ];

  formaRelacion = [
    'Paranoico',
    'Aislado',
    'Tiene iniciativas',
    'Reticencia',
    'Rechazo',
    'Mutismo',
    'Negativismo',
    'Sarcasmo',
    'Pegajosidad',
    'Colaboración excesiva'
  ];

  sexoContrario = [
    'Atento',
    'Seductor',
    'Evita conversar',
    'Impulsivo',
    'Bromista',
    'Descortés'
  ];

  agresividad = ['Física', 'Verbal', 'Ira', 'Hostilidad', 'No presenta'];

  humor = [
    'Triste',
    'Irritable',
    'Propenso a riñas',
    'Indiferente',
    'Preocupado y pensativo',
    'Tendencia al llanto',
    'Alegre',
    'Eufórico',
    'Lábil de humor'
  ];

  actividades = [
    'Perezoso',
    'Sólo hace cosas indispensables',
    'Dedicado a varias actividades',
    'Apraxia',
    'Agitación',
    'Amaneramiento',
    'Estereotipias',
    'Ecopraxia',
    'Obediencia automática',
    'Dispraxias',
    'Actos impulsivos',
    'Actos obsesivos',
    'Tics'
  ];

  comportamiento = [
    'Liderazgo',
    'Sociabilidad',
    'Responsabilidad',
    'Tolerancia normal',
    'Tolerancia baja',
    'Extravagante',
    'Antisocial',
    'Impulsivo',
    'Reflexivo',
    'Apático',
    'Dependiente',
    'Dominante',
    'Quejoso',
    'Temeroso',
    'Teatral',
    'Ritualista',
    'Aislamiento',
    'Ataques de pánico'
  ];

  afectividad = [
    'Inhibición',
    'Alta sensibilidad',
    'Ansiedad situacional',
    'Timidez',
    'Ansiedad expectante',
    'Aplanamiento',
    'Ambivalencia',
    'Irritabilidad',
    'Disociación ideo-afectiva',
    'Anhedonia'
  ];

  opcionesExamenFunciones = ['Pendiente por definir'];

  riesgoSuicida = ['Alto', 'Medio', 'Bajo'];

  constructor(public utilidades: UtilidadesFormulario) {}

  obtenerArray(ruta: string): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get(ruta));
  }
}
