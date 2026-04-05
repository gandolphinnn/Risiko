import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
	selector: 'app-home',
	imports: [RouterLink, TranslateModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {

	public readonly modal = inject(ModalService);

	public openNewGame() {
		this.modal.openNewGame();
	}
}
