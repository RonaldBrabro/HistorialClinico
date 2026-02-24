import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesFormulario {
  alternarOpcion(formArray: FormArray, opcion: string, limite?: number): void {
    const indice = formArray.controls.findIndex((control) => control.value === opcion);

    if (indice > -1) {
      formArray.removeAt(indice);
      return;
    }

    if (limite && formArray.length >= limite) {
      return;
    }

    formArray.push(new FormControl(opcion));
  }

  opcionSeleccionada(formArray: FormArray, opcion: string): boolean {
    return formArray.controls.some((control) => control.value === opcion);
  }

  comoFormArray(control?: AbstractControl | null): FormArray {
    return (control as FormArray) ?? new FormArray([]);
  }
}
