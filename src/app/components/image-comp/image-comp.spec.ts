import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComp } from './image-comp';

describe('ImageComp', () => {
  let component: ImageComp;
  let fixture: ComponentFixture<ImageComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
