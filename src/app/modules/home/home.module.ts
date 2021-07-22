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
		HomeComponent,
		ModalComponentContentComponent
	],
	imports: [
		CommonModule,
		SharedModule
	]
})
export class HomeModule { }
