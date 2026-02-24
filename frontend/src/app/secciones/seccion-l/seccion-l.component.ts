import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seccion-l',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seccion-l.component.html'
})
export class SeccionLComponent {
  @Input() grupo!: FormGroup;

  niveles = [0, 1, 2];
}
