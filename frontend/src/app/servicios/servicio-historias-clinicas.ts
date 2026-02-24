import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { entorno } from '../configuracion/entorno';
import { HistoriaClinica } from '../modelos/historia_clinica';

@Injectable({
  providedIn: 'root'
})
export class ServicioHistoriasClinicas {
  private readonly rutaBase = `${entorno.apiBase}/historias-clinicas`;

  constructor(private http: HttpClient) {}

  listar(): Observable<HistoriaClinica[]> {
    return this.http.get<HistoriaClinica[]>(this.rutaBase);
  }

  obtener(id: string): Observable<HistoriaClinica> {
    return this.http.get<HistoriaClinica>(`${this.rutaBase}/${id}`);
  }

  crear(historia: HistoriaClinica): Observable<HistoriaClinica> {
    return this.http.post<HistoriaClinica>(this.rutaBase, historia);
  }

  actualizar(id: string, historia: HistoriaClinica): Observable<HistoriaClinica> {
    return this.http.put<HistoriaClinica>(`${this.rutaBase}/${id}`, historia);
  }

  eliminar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.rutaBase}/${id}`);
  }
}
