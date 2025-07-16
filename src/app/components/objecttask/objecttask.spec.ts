import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Objecttask } from './objecttask';

describe('Objecttask', () => {
  let component: Objecttask;
  let fixture: ComponentFixture<Objecttask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Objecttask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Objecttask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
