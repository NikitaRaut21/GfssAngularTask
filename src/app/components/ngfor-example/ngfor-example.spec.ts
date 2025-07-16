import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforExample } from './ngfor-example';

describe('NgforExample', () => {
  let component: NgforExample;
  let fixture: ComponentFixture<NgforExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgforExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
