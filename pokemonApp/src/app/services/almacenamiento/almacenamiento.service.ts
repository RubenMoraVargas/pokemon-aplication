import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlmacenamientoService {
  constructor() {}
  public getPokemonSeleccionado() {
    return localStorage.getItem('pokemon-seleccionado');
  }
  public setPokemonSeleccionado(pokemonSeleccionado: string) {
    localStorage.setItem('pokemon-seleccionado', pokemonSeleccionado);
  }
  public getRol() {
    return localStorage.getItem('usuario-rol');
  }
  public setRol(rol: string) {
    localStorage.setItem('usuario-rol', rol);
  }
}
