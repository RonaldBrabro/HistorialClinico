import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAutenticacion } from '../../servicios/servicio-autenticacion';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  formulario: FormGroup;
  cargando = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private servicioAutenticacion: ServicioAutenticacion,
    private enrutador: Router
  ) {
    this.formulario = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  ingresar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.error = '';
    this.cargando = true;
    const { usuario, contrasena } = this.formulario.value;

    this.servicioAutenticacion
      .login(usuario ?? '', contrasena ?? '')
      .subscribe({
        next: () => {
          this.cargando = false;
          this.enrutador.navigate(['/historias-clinicas']);
        },
        error: () => {
          this.cargando = false;
          this.error = 'Credenciales invalidas. Intenta de nuevo.';
        }
      });
  }
}
