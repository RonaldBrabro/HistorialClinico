import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilidadesFormulario } from '../../utilidades/utilidades-formulario';

@Component({
  selector: 'app-fonoaudiologia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fonoaudiologia.component.html'
})
export class FonoaudiologiaComponent {
  @Input() grupo!: FormGroup;

  diagnosticosAudiologicos = [
    'H90.0', 'H90.1', 'H90.2', 'H90.3', 'H90.4', 'H90.5', 'H90.6', 'H90.7', 'H90.8', 'H90.9'
  ];

  diagnosticosFono = [
    'F80.0', 'F80.1', 'F80.2', 'F80.8', 'F80.9', 'R47.0', 'R47.1', 'R47.8', 'R47.9'
  ];

  aspectoOtorrea = ['Claro', 'Seroso', 'Mucoso', 'Mucopurulento', 'Purulento', 'Sanguinolento'];

  constructor(public utilidades: UtilidadesFormulario) {}

  obtenerArray(ruta: string): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get(ruta));
  }
}
