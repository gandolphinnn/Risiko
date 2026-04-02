import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		title: 'Play',
		path: 'play',
		loadComponent: () => import('./play/play.component').then(m => m.PlayComponent)
	},
	{
		title: 'Play',
		path: 'play/:game_id',
		loadComponent: () => import('./play/play.component').then(m => m.PlayComponent)
	}
];