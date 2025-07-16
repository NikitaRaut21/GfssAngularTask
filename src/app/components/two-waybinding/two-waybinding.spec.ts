import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaybinding } from './two-waybinding';

describe('TwoWaybinding', () => {
  let component: TwoWaybinding;
  let fixture: ComponentFixture<TwoWaybinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWaybinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWaybinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
