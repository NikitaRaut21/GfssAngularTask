import { TestBed } from '@angular/core/testing';

import { PostApis } from './post-apis';

describe('PostApis', () => {
  let service: PostApis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostApis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
