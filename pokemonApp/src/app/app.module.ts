import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { ListasComponent } from './components/listas/listas.component';
import { MenuComponent } from './components/menu/menu.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RestringidoComponent } from './components/restringido/restringido.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { TrucosComponent } from './components/trucos/trucos.component';

 
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent, 
    ResultadoComponent,
    PerfilComponent,
    MenuComponent,
    AcercaDeComponent,
    RestringidoComponent,
    ListasComponent,
    JuegosComponent,
    TableroComponent,
    TrucosComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
