import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MapComponent } from '../../components/map/map.component';

@Component({
	selector:    'app-play',
	templateUrl: './play.component.html',
	styleUrl:    './play.component.scss',
	imports:     [MapComponent],
})
export class PlayComponent {

	private route = inject(ActivatedRoute);

	gameId = toSignal(this.route.paramMap.pipe(map(p => p.get('game_id'))));
}
