import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UtilidadesFormulario } from '../../utilidades/utilidades-formulario';

@Component({
  selector: 'app-psicologia-educativa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './psicologia-educativa.component.html'
})
export class PsicologiaEducativaComponent {
  @Input() grupo!: FormGroup;

  asignaturas = ['Teoricas', 'Razonamiento numerico', 'Ingles', 'Otro'];
  evaluaciones = ['Psicologica', 'Pedagogica', 'Psiquiatrica', 'Lenguaje', 'Medica', 'Campo abierto especificar'];

  interpretacionesWais = [
    '0-69 Muy bajo',
    '70-79 Limite',
    '80-89 Normal bajo',
    '90-109 Medio',
    '110-119 Normal alto',
    '120-129 Superior',
    '130+ Muy superior'
  ];

  interpretacionesKbit = [
    '130-160 Muy alto',
    '120-129 Alto',
    '110-119 Medio alto',
    '90-109 Medio',
    '80-89 Medio bajo',
    '70-79 Bajo',
    '40-69 Muy bajo'
  ];

  constructor(public utilidades: UtilidadesFormulario) {}

  obtenerArray(ruta: string): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get(ruta));
  }

  obtenerTablaWais(): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get('resultadosReactivos.wais'));
  }

  obtenerTablaKbit(): FormArray {
    return this.utilidades.comoFormArray(this.grupo?.get('resultadosReactivos.kbit'));
  }

  agregarFilaWais(): void {
    this.obtenerTablaWais().push(
      new FormGroup({
        reactivo: new FormControl(''),
        puntuacion: new FormControl(''),
        interpretacion: new FormControl('')
      })
    );
  }

  agregarFilaKbit(): void {
    this.obtenerTablaKbit().push(
      new FormGroup({
        reactivo: new FormControl(''),
        puntuacion: new FormControl(''),
        categoria: new FormControl('')
      })
    );
  }

  eliminarFilaWais(indice: number): void {
    this.obtenerTablaWais().removeAt(indice);
  }

  eliminarFilaKbit(indice: number): void {
    this.obtenerTablaKbit().removeAt(indice);
  }
}
