import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppErrorHandler} from '../error-handler/error-handler.service';
import {NotificationService} from '../notification/notification.service';
import {SnackBarRef} from '../../../shared/components/snack-bar/snack-bar.ref';
import {MockErrorService} from '../../../testing/mock-services';

import {HttpService} from './http.service';

describe('HttpService', () => {
	let service: HttpService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				RouterTestingModule
			],
			providers: [
				{provide: AppErrorHandler, useClass: MockErrorService},
				NotificationService,
				SnackBarRef
			]
		});
		service = TestBed.inject(HttpService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
