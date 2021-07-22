import {Component, Injector, TemplateRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BsModalRef, ModalOptions} from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-confirm-modal',
	templateUrl: './confirm-modal.component.html',
	styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
	modalHeaderText: string;
	modalTitle: string;
	modalTitleHtml: string;
	modalSubTitle: string;
	modalSubTitleHtml: string;
	modalHtmlContent: string;
	modalTextContent: string;
	modalTemplateContent: TemplateRef<any>;
	modalComponentContent: Component;
	hideCancelButton: boolean = false;
	hideConfirmButton: boolean = false;
	cancelButtonLabel: string = 'cancel';
	confirmButtonLabel: string = 'ok';
	confirmHandler: any;
	cancelHandler: any;
	data: any;
	formGroup: FormGroup;
	ngModalOptions: ModalOptions;
	componentInjector: Injector;
	closeOnConfirm: boolean = true;
	closeOnCancel: boolean = true;

	constructor(
		public bsModalRef: BsModalRef
	) {}

	/**
	 * Handler when the cancel button is clicked
	 */
	onCancel() {
		if (this.cancelHandler) {
			this.cancelHandler();
		}
		if (this.closeOnCancel) {
			this.bsModalRef.hide();
		}
	}

	/**
	 * Handler when the confirm button is clicked
	 */
	onConfirm() {
		if (this.confirmHandler) {
			this.confirmHandler(this.data);
		} else {
			console.warn('No confirmHandler for the ConfirmModalComponent');
		}
		if (this.closeOnConfirm) {
			this.bsModalRef.hide();
		}
	}
}
