import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicioHistoriasClinicas } from '../../servicios/servicio-historias-clinicas';
import { HistoriaClinica } from '../../modelos/historia_clinica';

@Component({
  selector: 'app-listado-historias',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listado-historias.component.html',
  styleUrl: './listado-historias.component.css'
})
export class ListadoHistoriasComponent implements OnInit {
  historias: HistoriaClinica[] = [];
  cargando = true;
  error = '';

  constructor(private servicioHistorias: ServicioHistoriasClinicas) {}

  ngOnInit(): void {
    this.cargarHistorias();
  }

  cargarHistorias(): void {
    this.cargando = true;
    this.error = '';

    this.servicioHistorias.listar().subscribe({
      next: (historias) => {
        this.historias = historias;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No fue posible cargar las historias.';
        this.cargando = false;
      }
    });
  }
}
