import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ServicioAutenticacion } from '../servicios/servicio-autenticacion';

export const interceptorJwt: HttpInterceptorFn = (request, next) => {
  const servicioAutenticacion = inject(ServicioAutenticacion);
  const token = servicioAutenticacion.obtenerToken();

  if (!token) {
    return next(request);
  }

  const solicitudAutorizada = request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(solicitudAutorizada);
};
