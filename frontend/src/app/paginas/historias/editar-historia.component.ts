import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioFormularioHistoria } from '../../servicios/servicio-formulario-historia';
import { ServicioHistoriasClinicas } from '../../servicios/servicio-historias-clinicas';
import { FormularioHistoriaComponent } from './formulario-historia.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-historia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormularioHistoriaComponent],
  templateUrl: './editar-historia.component.html'
})
export class EditarHistoriaComponent implements OnInit {
  formulario: FormGroup;
  cargando = true;
  id = '';

  constructor(
    private servicioFormulario: ServicioFormularioHistoria,
    private servicioHistorias: ServicioHistoriasClinicas,
    private ruta: ActivatedRoute,
    private enrutador: Router
  ) {
    this.formulario = this.servicioFormulario.crearFormulario();
    this.configurarCalculoEdad();
  }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id') ?? '';
    this.servicioHistorias.obtener(this.id).subscribe({
      next: (historia) => {
        this.formulario.patchValue(historia);
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
      }
    });
  }

  actualizar(): void {
    if (this.formulario.invalid) {
      return;
    }

    this.servicioHistorias.actualizar(this.id, this.formulario.getRawValue()).subscribe({
      next: () => {
        this.enrutador.navigate(['/historias-clinicas', this.id]);
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
