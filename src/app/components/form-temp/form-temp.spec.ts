import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemp } from './form-temp';

describe('FormTemp', () => {
  let component: FormTemp;
  let fixture: ComponentFixture<FormTemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTemp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTemp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
