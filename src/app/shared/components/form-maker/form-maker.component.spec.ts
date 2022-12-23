import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMakerComponent } from './form-maker.component';

describe('FormMakerComponent', () => {
  let component: FormMakerComponent;
  let fixture: ComponentFixture<FormMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
