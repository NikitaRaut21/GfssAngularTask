import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Variabletask } from './variabletask';

describe('Variabletask', () => {
  let component: Variabletask;
  let fixture: ComponentFixture<Variabletask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Variabletask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Variabletask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
