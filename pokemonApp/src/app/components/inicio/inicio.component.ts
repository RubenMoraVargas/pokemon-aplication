import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlmacenamientoService } from 'src/app/services/almacenamiento/almacenamiento.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  constructor(private router: Router, private almacenamientoService: AlmacenamientoService) {}

  seleccionarPokemon(pokemonSeleccionado: string) {
    this.almacenamientoService.setPokemonSeleccionado(pokemonSeleccionado);
    this.router.navigate(['/', 'tablero']);
  }
}
