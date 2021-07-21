import {TestBed} from '@angular/core/testing';
import {NotificationService} from '../notification/notification.service';
import {SnackBarRef} from '../../../shared/components/snack-bar/snack-bar.ref';
import {MockUiService} from '../../../testing/mock-services';

import {AppErrorHandler} from '../../../core/services/error-handler/error-handler.service';

describe('ErrorService', () => {
	let service: AppErrorHandler;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{provide: NotificationService, useClass: MockUiService},
				SnackBarRef
			]
		});
		service = TestBed.inject(AppErrorHandler);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
