import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AppErrorHandler} from '../../../../core/services/error-handler/error-handler.service';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {NotificationService} from '../../../../core/services/notification/notification.service';
import {provideMockStore} from '@ngrx/store/testing';
import {MockAuthService, MockErrorService, MockUiService} from '../../../../testing/mock-services';

import {LoginComponent} from './login.component';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	const initialState = {
		user: {
			data: {
				_key: '605429',
				_id: 'people/605429',
				_rev: '_bdrJp_C--_',
				first_name: 'William',
				last_name: 'Strickland',
				email: 'capt.jack.sparrow@eastindiatradingcompany.com',
				password: '$2b$13$XTy42M0WijOEHVF9MzfnquuHqs2uMCIJvBVulqoUcbvVpFFYXbS5q',
				created_date: '2020-11-19T14:38:32.189Z'
			},
			loading: false
		}
	};

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
				ReactiveFormsModule,
				RouterTestingModule
			],
			declarations: [LoginComponent],
			providers: [
				{provide: AppErrorHandler, useClass: MockErrorService},
				{provide: AuthService, useClass: MockAuthService},
				{provide: NotificationService, useClass: MockUiService},
				provideMockStore({initialState})
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
