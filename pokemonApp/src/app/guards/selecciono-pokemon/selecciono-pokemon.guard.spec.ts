import { TestBed } from '@angular/core/testing';

import { SeleccionoPokemonGuard } from './selecciono-pokemon.guard';

describe('SeleccionoPokemonGuard', () => {
  let guard: SeleccionoPokemonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SeleccionoPokemonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
