import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
	selector: 'app-play',
	templateUrl: './play.component.html',
	styleUrl: './play.component.scss',
	imports: [],
})
export class PlayComponent {

	private route = inject(ActivatedRoute);

	public gameId = toSignal(this.route.paramMap.pipe(map(p => p.get('game_id'))));

}