import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifExample } from './ngif-example';

describe('NgifExample', () => {
  let component: NgifExample;
  let fixture: ComponentFixture<NgifExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgifExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
