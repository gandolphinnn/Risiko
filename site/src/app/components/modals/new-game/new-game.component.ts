import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from '../modal';

@Component({
	selector: 'app-new-game',
	templateUrl: './new-game.component.html',
	styleUrl: './new-game.component.scss',
	imports: [FormsModule, TranslateModule],
})
export class NewGameComponent extends ModalComponent {
	protected bots$ = signal(2);

	public close() {
		return this.activeModal.close(this.bots$());
	}
}
