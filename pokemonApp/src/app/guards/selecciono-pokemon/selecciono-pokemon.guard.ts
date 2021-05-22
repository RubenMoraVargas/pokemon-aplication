import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlmacenamientoService } from 'src/app/services/almacenamiento/almacenamiento.service';

@Injectable({
  providedIn: 'root',
})
export class SeleccionoPokemonGuard implements CanActivate {
  constructor(private almacenamientoService: AlmacenamientoService, private router: Router) {}
  canActivate(): boolean {
    const pokemonSeleccionado = this.almacenamientoService.getPokemonSeleccionado();

    if (pokemonSeleccionado && pokemonSeleccionado.trim() != '') {
      return true;
    }
    this.router.navigate(['/', 'restringido']);
    return false;
  }
}
