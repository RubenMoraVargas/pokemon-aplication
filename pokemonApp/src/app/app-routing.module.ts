import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { ListasComponent } from './components/listas/listas.component';
import { RestringidoComponent } from './components/restringido/restringido.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { TrucosComponent } from './components/trucos/trucos.component';
import { EstaAutorizadoGuard } from './guards/esta-autorizado/esta-autorizado.guard';
import { SeleccionoPokemonGuard } from './guards/selecciono-pokemon/selecciono-pokemon.guard';
import { RolesSistema } from './seguridad/roles.enum';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  {  path: 'tablero',
    component: TableroComponent,
    canActivate: [SeleccionoPokemonGuard],
    children: [
      { path: 'acerca-de', component: AcercaDeComponent },
      {
        path: 'listas',
        component: ListasComponent,
        children: [
          { path: '', redirectTo: 'temporadas', pathMatch: 'full' },
          {  path: 'juegos',
            component: JuegosComponent,
            canActivate: [EstaAutorizadoGuard],
            data: { role: RolesSistema.ES_GAMER },
          },
          {  path: 'trucos',
            component: TrucosComponent,
            canActivate: [EstaAutorizadoGuard],
            data: { role: RolesSistema.ES_HACKER },
          },
          { path: ':tipo-lista', component: ResultadoComponent },
        ],
      },
      { path: '**', redirectTo: 'listas', pathMatch: 'full' },
    ],
  },
  { path: 'restringido', component: RestringidoComponent },
{ path: '**', redirectTo: 'tablero', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
