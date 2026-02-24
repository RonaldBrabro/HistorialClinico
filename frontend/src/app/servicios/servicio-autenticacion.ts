import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { entorno } from '../configuracion/entorno';

interface RespuestaLogin {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioAutenticacion {
  private readonly claveToken = 'token_historia_clinica';

  constructor(private http: HttpClient) {}

  login(usuario: string, contrasena: string): Observable<void> {
    return this.http
      .post<RespuestaLogin>(`${entorno.apiBase}/auth/login`, {
        usuario,
        contrasena
      })
      .pipe(
        map((respuesta) => {
          localStorage.setItem(this.claveToken, respuesta.token);
        })
      );
  }

  cerrarSesion(): void {
    localStorage.removeItem(this.claveToken);
  }

  obtenerToken(): string | null {
    return localStorage.getItem(this.claveToken);
  }

  estaAutenticado(): boolean {
    return Boolean(this.obtenerToken());
  }
}
