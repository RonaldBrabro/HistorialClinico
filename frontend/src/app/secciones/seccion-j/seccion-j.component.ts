import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilidadesFormulario } from '../../utilidades/utilidades-formulario';

@Component({
  selector: 'app-seccion-j',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion-j.component.html'
})
export class SeccionJComponent {
  @Input() grupo!: FormGroup;

  sustancias = ['Alcohol', 'Marihuana', 'Cigarrillo', 'Cocaina', 'LSD', 'Hongos', 'Otros'];

  frecuencias = ['2 a 3 por semana', '4 o mas por semana', 'Una por mes'];

  constructor(public utilidades: UtilidadesFormulario) {}

  obtenerArray(): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get('sustancias'));
  }
}
