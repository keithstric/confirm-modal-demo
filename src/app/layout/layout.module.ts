import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SiteFooterComponent} from './components/site-footer/site-footer.component';
import {SiteHeaderComponent} from './components/site-header/site-header.component';
import {BreadcrumbService} from './services/breadcrumb/breadcrumb.service';
import {LayoutService} from './services/layout/layout.service';
import {LoadingService} from './services/loading/loading.service';
import {SharedModule} from '../shared/shared.module';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {PageBreadcrumbHeaderComponent} from './components/page-breadcrumb-header/page-breadcrumb-header.component';

const components = [
	BreadcrumbsComponent,
	PageBreadcrumbHeaderComponent,
	PageNotFoundComponent,
	SiteFooterComponent,
	SiteHeaderComponent,
];

/**
 * The LayoutModule
 */
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		SharedModule
	],
	declarations: [
		...components
	],
	exports: [
		...components
	],
	providers: [
		BreadcrumbService,
		LayoutService,
		LoadingService
	],
	entryComponents: [
		SiteHeaderComponent,
		SiteFooterComponent
	]
})
export class LayoutModule {
}
