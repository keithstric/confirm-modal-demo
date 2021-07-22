import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalComponentContentComponent} from '../../modules/home/components/modal-component-content/modal-component-content.component';
import {ConfirmModalConfig} from '../../shared/components/confirm-modal/confirm-modal.interface';
import {HttpService} from '../../core/services/http/http.service';
import {Logger} from '../../core/services/logger/logger';
import {NotificationService} from '../../core/services/notification/notification.service';
import {SnackbarMessageTypes} from '../../shared/components/snack-bar/snack-bar.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	templateText: string = 'We can use text/data from a property';
	@ViewChild('templateModal') modalTemplate: TemplateRef<any>;

	constructor(
		private _http: HttpService
	) {}

	ngOnInit(): void {
		NotificationService.showSnackbar({
			message: 'Welcome to angular-boilerplate-plain!',
			messageType: SnackbarMessageTypes.SUCCESS
		});
		Logger.info(`Welcome to angular-boilerplate-plain logger`, 'string param', {foo: 'bar', baz: 'boo'}, ['foo', 'bar']);
	}

	showTextModal() {
		const modalConfig: ConfirmModalConfig = {
			modalTitle: 'Here is the title',
			modalSubTitle: 'A Subtitle',
			modalTextContent: 'Here is some plain text content',
			data: {foo: 'bar'},
			confirmButtonLabel: 'Ten Four',
			confirmHandler: (data) => {
				console.log('Confirm handler: Confirm button clicked, data=', data);
			},
			cancelHandler: () => {
				console.log('Cancel handler: Cancel button clicked');
			}
		};
		NotificationService.showConfirmDialog(modalConfig);
	}

	showTemplateModal() {
		const modalConfig: ConfirmModalConfig = {
			modalHeaderText: 'Some header text',
			modalTitle: 'Here is the title',
			modalSubTitleHtml: `<div>Here is an html sub title</div>`,
			modalTemplateContent: this.modalTemplate,
			data: {foo: 'bar'},
			confirmHandler: (data) => {
				console.log('Confirm handler: Confirm button clicked, data=', data);
			},
			cancelHandler: () => {
				console.log('Cancel handler: Cancel button clicked');
			}
		};
		NotificationService.showConfirmDialog(modalConfig);
	}

	showComponentModal() {
		const modalConfig: ConfirmModalConfig = {
			modalHeaderText: 'Some header text',
			modalTitleHtml: `<i class="fas fa-info"></i> Here is an html title`, // icon style can be found in src/scss/misc/_app-global.scss
			modalComponentContent: ModalComponentContentComponent,
			data: {foo: 'bar'},
			ngModalOptions: {
				class: 'component-modal',
				ignoreBackdropClick: true
			},
			confirmButtonLabel: 'Roger that',
			confirmHandler: (data) => {
				console.log('Confirm handler: Confirm button clicked, data=', data);
			},
			cancelHandler: () => {
				console.log('Cancel handler: Cancel button clicked');
			}
		};
		NotificationService.showConfirmDialog(modalConfig);
	}

	modalButtonClick() {
		console.log('Modal button clicked');
	}
}
