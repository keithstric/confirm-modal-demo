import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponentContentComponent } from './modal-component-content.component';

describe('ModalComponentContentComponent', () => {
  let component: ModalComponentContentComponent;
  let fixture: ComponentFixture<ModalComponentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponentContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
