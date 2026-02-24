import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seccion-c',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion-c.component.html'
})
export class SeccionCComponent {
  @Input() grupo!: FormGroup;

  tiposFamilia = [
    'Nuclear',
    'Extensa/consanguinea',
    'Monoparental',
    'Reconstituida',
    'Ampliada (no consanguinea)',
    'Vive solo'
  ];

  funcionamientos = [
    'Funcional',
    'Moderadamente funcional',
    'Disfuncional',
    'Severamente disfuncional'
  ];
}
