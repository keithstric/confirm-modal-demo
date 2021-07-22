import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './home.component';
import { ModalComponentContentComponent } from './components/modal-component-content/modal-component-content.component';

/**
 * The HomeModule
 */
@NgModule({
	declarations: [
		ModalComponentContentComponent
	],
	imports: [
		CommonModule,
		SharedModule
	],
	entryComponents: [
		ModalComponentContentComponent
	]
})
export class HomeModule { }
