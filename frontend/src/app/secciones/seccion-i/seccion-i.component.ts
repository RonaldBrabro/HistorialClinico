import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilidadesFormulario } from '../../utilidades/utilidades-formulario';

@Component({
  selector: 'app-seccion-i',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion-i.component.html'
})
export class SeccionIComponent {
  @Input() grupo!: FormGroup;

  opciones = [
    'Temores',
    'Destructividad',
    'Nerviosismos',
    'Irritabilidad',
    'Egocentrismo',
    'Regresiones',
    'Tics',
    'Hurto',
    'Mentira',
    'Cuidado personal'
  ];

  constructor(public utilidades: UtilidadesFormulario) {}

  obtenerArray(): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get('conductasPreocupantes'));
  }
}
