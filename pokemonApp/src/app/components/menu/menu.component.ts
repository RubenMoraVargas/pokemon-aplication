import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlmacenamientoService } from 'src/app/services/almacenamiento/almacenamiento.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  pokemonSeleccionado: string | null | undefined;
  constructor(private almacenamientoService:AlmacenamientoService,private router: Router) {}

  ngOnInit(): void {
    this.pokemonSeleccionado= this.almacenamientoService.getPokemonSeleccionado()
  }
  
  borrarPokemon(){
    this.almacenamientoService.setRol('');
    this.almacenamientoService.setPokemonSeleccionado(''); 
  }
  
}
