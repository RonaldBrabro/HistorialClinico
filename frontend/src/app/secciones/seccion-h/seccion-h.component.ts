import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilidadesFormulario } from '../../utilidades/utilidades-formulario';

@Component({
  selector: 'app-seccion-h',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion-h.component.html'
})
export class SeccionHComponent {
  @Input() grupo!: FormGroup;

  opciones = [
    'Aislamiento',
    'Control de esfinteres',
    'Temores nocturnos',
    'Timidez',
    'Sadismo',
    'Hiperactividad',
    'Fobia escolar',
    'Mal comportamiento escolar',
    'Conducta extravagante',
    'Tendencia a mentiras',
    'Tendencia a robos',
    'Cambios en vida y conducta del paciente'
  ];

  constructor(public utilidades: UtilidadesFormulario) {}

  obtenerArray(): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get('momentosEvolutivos'));
  }
}
