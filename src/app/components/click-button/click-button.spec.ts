import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickButton } from './click-button';

describe('ClickButton', () => {
  let component: ClickButton;
  let fixture: ComponentFixture<ClickButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
