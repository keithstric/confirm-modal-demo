import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppErrorHandler} from '../services/error-handler/error-handler.service';
import {HttpService} from '../services/http/http.service';
import {LocalStorageService} from '../services/local-storage/local-storage.service';
import {NotificationService} from '../services/notification/notification.service';
import {SnackBarRef} from '@shared/components/snack-bar/snack-bar.ref';
import {MockErrorService, MockHttpService, MockLocalStorageService} from 'src/app/testing/mock-services';

import {AuthService} from '../services/auth/auth.service';

describe('AuthService', () => {
	let service: AuthService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				RouterTestingModule
			],
			providers: [
				{provide: HttpService, useClass: MockHttpService},
				{provide: LocalStorageService, useClass: MockLocalStorageService},
				{provide: AppErrorHandler, useClass: MockErrorService},
				NotificationService,
				SnackBarRef
			]
		});
		service = TestBed.inject(AuthService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
