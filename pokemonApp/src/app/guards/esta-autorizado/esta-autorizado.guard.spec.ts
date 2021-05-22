import { TestBed } from '@angular/core/testing';

import { EstaAutorizadoGuard } from './esta-autorizado.guard';

describe('EstaAutorizadoGuard', () => {
  let guard: EstaAutorizadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EstaAutorizadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
