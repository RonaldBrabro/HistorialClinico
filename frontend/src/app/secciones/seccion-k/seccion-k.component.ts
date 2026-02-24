import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilidadesFormulario } from '../../utilidades/utilidades-formulario';

@Component({
  selector: 'app-seccion-k',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion-k.component.html'
})
export class SeccionKComponent {
  @Input() grupo!: FormGroup;

  opciones = [
    'Satisfaccion sueno',
    'Alteraciones sueno',
    'Hipersomnia',
    'Dificultad conciliar',
    'Despertar frecuente',
    'Despertar prematuro',
    'Sonambulismo',
    'Paralisis del sueno'
  ];

  constructor(public utilidades: UtilidadesFormulario) {}

  obtenerArray(): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get('habitosSueno'));
  }
}
