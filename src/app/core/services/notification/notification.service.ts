import {Injectable} from '@angular/core';
import {ConfirmModalComponent} from '@shared/components/confirm-modal/confirm-modal.component';
import {ServiceLocator} from '../service-locator';
import {ConfirmModalConfig} from '../../../shared/components/confirm-modal/confirm-modal.interface';
import {SnackbarConfig} from '../../../shared/components/snack-bar/snack-bar.interface';
import {SnackBarRef} from '../../../shared/components/snack-bar/snack-bar.ref';
import {BsModalService, ModalOptions} from 'ngx-bootstrap/modal';

enum NotificationPermissions {
	GRANTED = 'granted',
	DENIED = 'denied',
	DEFAULT = 'default'
}

@Injectable()
export class NotificationService {

	constructor() {}

	/**
	 * Show a snackbar/toast message
	 * @param config
	 */
	static showSnackbar(config: SnackbarConfig) {
		const snackbarRef = ServiceLocator.injector.get(SnackBarRef);
		snackbarRef.show(config);
	}

	/**
	 * Show a confirmation dialog
	 *
	 * @example
	 * const ref = this._ui.showConfirmDialog({message: 'foo', title: 'bar'});
	 * // if you don't care about the result, you can omit this
	 * ref.afterOpen().subscribe(result => {console.log(result)});
	 *
	 * @param modalConfig
	 */
	static showConfirmDialog(modalConfig: ConfirmModalConfig) {
		// because this is a static method, cannot inject BsModalService into constructor and use that, need to locate it
		const bsModalService = ServiceLocator.injector.get(BsModalService);
		const modalConfigImpl: ModalOptions<ConfirmModalConfig> = {
			...modalConfig.ngModalOptions,
			initialState: modalConfig
		};
		return bsModalService.show(ConfirmModalComponent, modalConfigImpl);
	}
}
