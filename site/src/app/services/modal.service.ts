import { inject, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewGameComponent } from '../components/modals/new-game/new-game.component';
import { GameService } from './game.service';
import { Player } from './core/actor/player';
import { ActorColor } from './core/actor/actor';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	private readonly modal = inject(NgbModal);
	private readonly game = inject(GameService);
	private readonly router = inject(Router);

	async openNewGame() {
		const modalRef = this.modal.open(NewGameComponent, { centered: true });
		const bots = await modalRef.result;
		const player = new Player('Player 1', ActorColor.Blue);
		this.game.start([player], { botsAmount: bots });
		this.router.navigate(['/play']);
	}
	async openSettings() {
		//this.modal.open(SettingsComponent, { centered: true });
	}
}
