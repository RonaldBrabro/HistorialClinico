import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilidadesFormulario } from '../../utilidades/utilidades-formulario';

@Component({
  selector: 'app-seccion-b',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion-b.component.html'
})
export class SeccionBComponent {
  @Input() grupo!: FormGroup;

  motivos = [
    'Adaptaciones curriculares',
    'Discapacidad',
    'Problemas psicoemocionales',
    'Alteraciones funciones mentales',
    'Patologias psiquiatricas',
    'Problemas academicos',
    'Valoracion voluntaria'
  ];

  constructor(public utilidades: UtilidadesFormulario) {}

  obtenerArray(): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get('motivoConsulta'));
  }
}
