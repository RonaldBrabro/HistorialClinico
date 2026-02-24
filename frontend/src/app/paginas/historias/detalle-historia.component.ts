import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicioHistoriasClinicas } from '../../servicios/servicio-historias-clinicas';
import { HistoriaClinica } from '../../modelos/historia_clinica';

@Component({
  selector: 'app-detalle-historia',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-historia.component.html',
  styleUrl: './detalle-historia.component.css'
})
export class DetalleHistoriaComponent implements OnInit {
  historia?: HistoriaClinica;
  cargando = true;

  constructor(
    private ruta: ActivatedRoute,
    private servicioHistorias: ServicioHistoriasClinicas
  ) {}

  ngOnInit(): void {
    const id = this.ruta.snapshot.paramMap.get('id') ?? '';
    this.servicioHistorias.obtener(id).subscribe({
      next: (historia) => {
        this.historia = historia;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
      }
    });
  }
}
