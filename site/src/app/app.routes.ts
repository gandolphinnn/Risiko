import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		title: 'Play',
		path: 'play',
		loadComponent: () => import('./pages/play/play.component').then(m => m.PlayComponent)
	},
	{
		title: 'Play',
		path: 'play/:game_id',
		loadComponent: () => import('./pages/play/play.component').then(m => m.PlayComponent)
	},
	{
		title: 'Risiko',
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
	},
];