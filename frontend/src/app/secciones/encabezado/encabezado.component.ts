import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './encabezado.component.html'
})
export class EncabezadoComponent {
  @Input() grupo!: FormGroup;
}
