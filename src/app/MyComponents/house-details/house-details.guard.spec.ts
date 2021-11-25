import { TestBed } from '@angular/core/testing';

import { HouseDetailsGuard } from './house-details.guard';

describe('HouseDetailsGuard', () => {
  let guard: HouseDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HouseDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
