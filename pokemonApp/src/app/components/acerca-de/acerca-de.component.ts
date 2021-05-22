import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolesSistema } from 'src/app/seguridad/roles.enum';
import { AlmacenamientoService } from 'src/app/services/almacenamiento/almacenamiento.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(private almacenamientoService:AlmacenamientoService, private router:Router) { }

  ngOnInit(): void {
  }

  iniciarComoGamer(){
     this.almacenamientoService.setRol(RolesSistema.ES_GAMER);
      this.router.navigate(['/tablero']);
  }
  
  iniciarComoHacker(){
     this.almacenamientoService.setRol(RolesSistema.ES_HACKER);
      this.router.navigate(['/tablero']);
  }
  
}
