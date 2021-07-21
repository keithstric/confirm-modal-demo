import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpRequestInterceptor} from './interceptors/http-request-interceptor.service';
import {RootStoreModule} from './root-store/root-store.module';
import {DomInjectorService} from './services/dom-injector/dom-injector.service';
import {AppErrorHandler} from './services/error-handler/error-handler.service';
import {HttpCacheService} from './services/http-cache/http-cache.service';
import {HttpService} from './services/http/http.service';
import {LocalStorageService} from './services/local-storage/local-storage.service';
import {NotificationService} from './services/notification/notification.service';
import {RouterStateService} from './services/router-state/router-state.service';

/**
 * Core module
 */
@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RootStoreModule
	],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
		{provide: ErrorHandler, useClass: AppErrorHandler},
		DomInjectorService,
		HttpCacheService,
		HttpService,
		LocalStorageService,
		NotificationService,
		RouterStateService
	]
})
export class CoreModule { }
