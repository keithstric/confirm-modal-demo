import {TestBed} from '@angular/core/testing';

import {DomInjectorService} from './dom-injector.service';

describe('DomInjectorService', () => {
	let service: DomInjectorService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DomInjectorService
			]
		});
		service = TestBed.inject(DomInjectorService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
