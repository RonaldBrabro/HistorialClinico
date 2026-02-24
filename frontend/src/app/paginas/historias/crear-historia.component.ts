import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioFormularioHistoria } from '../../servicios/servicio-formulario-historia';
import { ServicioHistoriasClinicas } from '../../servicios/servicio-historias-clinicas';
import { FormularioHistoriaComponent } from './formulario-historia.component';

@Component({
  selector: 'app-crear-historia',
  standalone: true,
  imports: [ReactiveFormsModule, FormularioHistoriaComponent],
  templateUrl: './crear-historia.component.html'
})
export class CrearHistoriaComponent {
  formulario: FormGroup;
  guardando = false;

  constructor(
    private servicioFormulario: ServicioFormularioHistoria,
    private servicioHistorias: ServicioHistoriasClinicas,
    private router: Router
  ) {
    this.formulario = this.servicioFormulario.crearFormulario();
    this.configurarCalculoEdad();
  }

  guardar(): void {
    if (this.formulario.invalid) {
      return;
    }

    this.guardando = true;
    this.servicioHistorias.crear(this.formulario.getRawValue()).subscribe({
      next: (historia) => {
        this.guardando = false;
        this.router.navigate(['/historias-clinicas', historia.id]);
      },
      error: () => {
        this.guardando = false;
      }
    });
  }

  private configurarCalculoEdad(): void {
    this.formulario.get('seccionA.fechaNacimiento')?.valueChanges.subscribe((fecha) => {
      if (!fecha) {
        return;
      }

      const fechaNacimiento = new Date(fecha);
      const ahora = new Date();
      let anios = ahora.getFullYear() - fechaNacimiento.getFullYear();
      let meses = ahora.getMonth() - fechaNacimiento.getMonth();

      if (meses < 0) {
        anios -= 1;
        meses += 12;
      }

      this.formulario.get('seccionA.edadAnios')?.setValue(anios);
      this.formulario.get('seccionA.edadMeses')?.setValue(meses);
    });
  }
}
