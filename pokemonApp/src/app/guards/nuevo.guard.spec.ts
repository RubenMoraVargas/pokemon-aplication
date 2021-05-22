import { TestBed } from '@angular/core/testing';

import { NuevoGuard } from './nuevo.guard';

describe('NuevoGuard', () => {
  let guard: NuevoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NuevoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
