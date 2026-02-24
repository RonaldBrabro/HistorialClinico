import { Routes } from '@angular/router';
import { guardiaAutenticacion } from './guardias/guardia-autenticacion';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'inicio-sesion',
		pathMatch: 'full'
	},
	{
		path: 'inicio-sesion',
		loadComponent: () =>
			import('./paginas/inicio-sesion/inicio-sesion.component').then(
				(m) => m.InicioSesionComponent
			)
	},
	{
		path: 'historias-clinicas',
		canActivate: [guardiaAutenticacion],
		loadComponent: () =>
			import('./paginas/historias/listado-historias.component').then(
				(m) => m.ListadoHistoriasComponent
			)
	},
	{
		path: 'historias-clinicas/nueva',
		canActivate: [guardiaAutenticacion],
		loadComponent: () =>
			import('./paginas/historias/crear-historia.component').then(
				(m) => m.CrearHistoriaComponent
			)
	},
	{
		path: 'historias-clinicas/:id',
		canActivate: [guardiaAutenticacion],
		loadComponent: () =>
			import('./paginas/historias/detalle-historia.component').then(
				(m) => m.DetalleHistoriaComponent
			)
	},
	{
		path: 'historias-clinicas/:id/editar',
		canActivate: [guardiaAutenticacion],
		loadComponent: () =>
			import('./paginas/historias/editar-historia.component').then(
				(m) => m.EditarHistoriaComponent
			)
	},
	{
		path: 'demo-js',
		canActivate: [guardiaAutenticacion],
		loadComponent: () =>
			import('./paginas/demo-js/demo-js.component').then(
				(m) => m.DemoJsComponent
			)
	},
	{
		path: '**',
		redirectTo: 'inicio-sesion'
	}
];
