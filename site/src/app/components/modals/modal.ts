import { inject } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

export abstract class ModalComponent {
	protected activeModal = inject(NgbActiveModal);
}