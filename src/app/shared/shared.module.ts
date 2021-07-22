import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxBootstrapModule} from '../layout/modules/ngx-bootstrap.module';
import {SnackBarRef} from './components/snack-bar/snack-bar.ref';
import {UserAvatarComponent} from './components/user-avatar/user-avatar.component';
import {FileDnDDirective} from './directives/file-dn-d.directive';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';
import { CardComponent } from './components/card/card.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

const sharedComponents = [
	CardComponent,
	UserAvatarComponent,
	ConfirmModalComponent,
	SnackBarComponent
];

const sharedDirectives = [
	FileDnDDirective
];

@NgModule({
	declarations: [
		...sharedComponents,
		...sharedDirectives,
		SafeHtmlPipe
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgxBootstrapModule
	],
	providers: [
		SnackBarRef,
		FormBuilder
	],
	exports: [
		...sharedComponents,
		FormsModule,
		ReactiveFormsModule,
		NgxBootstrapModule
	],
	entryComponents: [
		SnackBarComponent,
		ConfirmModalComponent
	]
})

export class SharedModule { }
