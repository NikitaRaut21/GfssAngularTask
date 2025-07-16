import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arraytask } from './arraytask';

describe('Arraytask', () => {
  let component: Arraytask;
  let fixture: ComponentFixture<Arraytask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arraytask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arraytask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
