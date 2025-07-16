import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapNgfor } from './bootstrap-ngfor';

describe('BootstrapNgfor', () => {
  let component: BootstrapNgfor;
  let fixture: ComponentFixture<BootstrapNgfor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapNgfor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapNgfor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
