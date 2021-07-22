import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalComponentContentComponent} from '@modules/home/components/modal-component-content/modal-component-content.component';
import {HomeComponent} from './modules/home/home.component';
import {CoreModule} from './core/core.module';
import {ServiceLocator} from './core/services/service-locator';
import {LayoutModule} from './layout/layout.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { SharedModule } from './shared/shared.module';

/**
 * The AppModule
 */
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		CoreModule,
		LayoutModule,
		ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
		SharedModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [ModalComponentContentComponent]
})

export class AppModule {
	/**
	 * Update the ServiceLocator to provide the injector to static methods, properties and pojo items
	 * @param _injector
	 */
	constructor(private _injector: Injector) {
		const injectorListener = ServiceLocator.observableInjector.subscribe((injector) => {
			ServiceLocator.injector = injector;
			if (ServiceLocator.injector) {
				injectorListener.unsubscribe();
			}
		});
		ServiceLocator.observableInjector.next(_injector);
	}
}
