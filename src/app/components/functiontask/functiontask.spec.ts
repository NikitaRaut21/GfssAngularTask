import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Functiontask } from './functiontask';

describe('Functiontask', () => {
  let component: Functiontask;
  let fixture: ComponentFixture<Functiontask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Functiontask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Functiontask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
