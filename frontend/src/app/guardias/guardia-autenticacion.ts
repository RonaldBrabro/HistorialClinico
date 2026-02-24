import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServicioAutenticacion } from '../servicios/servicio-autenticacion';

export const guardiaAutenticacion: CanActivateFn = () => {
  const servicioAutenticacion = inject(ServicioAutenticacion);
  const enrutador = inject(Router);

  if (servicioAutenticacion.estaAutenticado()) {
    return true;
  }

  enrutador.navigate(['/inicio-sesion']);
  return false;
};
