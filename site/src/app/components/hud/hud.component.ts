import { Component, inject } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
	selector: 'app-hud',
	templateUrl: './hud.component.html',
	styleUrl: './hud.component.scss',
	imports: [],
})
export class HudComponent {

	private game = inject(GameService);

	get allActors() {
		return [...this.game.players, ...this.game.bots];
	}
}
