import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EncabezadoComponent } from '../../secciones/encabezado/encabezado.component';
import { SeccionAComponent } from '../../secciones/seccion-a/seccion-a.component';
import { SeccionBComponent } from '../../secciones/seccion-b/seccion-b.component';
import { SeccionCComponent } from '../../secciones/seccion-c/seccion-c.component';
import { SeccionDComponent } from '../../secciones/seccion-d/seccion-d.component';
import { SeccionEComponent } from '../../secciones/seccion-e/seccion-e.component';
import { SeccionFComponent } from '../../secciones/seccion-f/seccion-f.component';
import { SeccionGComponent } from '../../secciones/seccion-g/seccion-g.component';
import { SeccionHComponent } from '../../secciones/seccion-h/seccion-h.component';
import { SeccionIComponent } from '../../secciones/seccion-i/seccion-i.component';
import { SeccionJComponent } from '../../secciones/seccion-j/seccion-j.component';
import { SeccionKComponent } from '../../secciones/seccion-k/seccion-k.component';
import { SeccionLComponent } from '../../secciones/seccion-l/seccion-l.component';
import { PsicologiaEducativaComponent } from '../../secciones/psicologia-educativa/psicologia-educativa.component';
import { FonoaudiologiaComponent } from '../../secciones/fonoaudiologia/fonoaudiologia.component';
import { PsicologiaClinicaComponent } from '../../secciones/psicologia-clinica/psicologia-clinica.component';

@Component({
  selector: 'app-formulario-historia',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EncabezadoComponent,
    SeccionAComponent,
    SeccionBComponent,
    SeccionCComponent,
    SeccionDComponent,
    SeccionEComponent,
    SeccionFComponent,
    SeccionGComponent,
    SeccionHComponent,
    SeccionIComponent,
    SeccionJComponent,
    SeccionKComponent,
    SeccionLComponent,
    PsicologiaEducativaComponent,
    FonoaudiologiaComponent,
    PsicologiaClinicaComponent
  ],
  templateUrl: './formulario-historia.component.html',
  styleUrl: './formulario-historia.component.css'
})
export class FormularioHistoriaComponent {
  @Input() formulario!: FormGroup;
  @Input() titulo = '';
  @Input() textoBoton = 'Guardar';
  @Output() guardar = new EventEmitter<void>();

  obtenerGrupo(ruta: string): FormGroup {
    return this.formulario.get(ruta) as FormGroup;
  }

  enviar(): void {
    this.formulario.markAllAsTouched();
    if (this.formulario.valid) {
      this.guardar.emit();
    }
  }
}
