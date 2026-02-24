import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilidadesFormulario } from '../../utilidades/utilidades-formulario';

@Component({
  selector: 'app-seccion-e',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion-e.component.html'
})
export class SeccionEComponent {
  @Input() grupo!: FormGroup;

  opciones = [
    'Chupete',
    'Succion pulgar',
    'Onicofagia',
    'Pica',
    'Anorexia',
    'Bulimia',
    'Polifagia',
    'Coprofagia'
  ];

  constructor(public utilidades: UtilidadesFormulario) {}

  obtenerArray(): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get('checklist'));
  }
}
