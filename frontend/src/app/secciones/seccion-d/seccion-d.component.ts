import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilidadesFormulario } from '../../utilidades/utilidades-formulario';

@Component({
  selector: 'app-seccion-d',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion-d.component.html'
})
export class SeccionDComponent {
  @Input() grupo!: FormGroup;

  tiposParto = ['Parto a termino', 'Prematuro', 'Normal', 'Cesarea', 'Respiracion y llanto', 'Complicaciones al nacer'];
  maniobrasReanimacion = ['Bolsa oxigeno', 'Ventilacion asistida', 'Intubacion', 'Medicamentos'];

  constructor(public utilidades: UtilidadesFormulario) {}

  obtenerArray(nombre: string): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get(nombre));
  }
}
