import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AlmacenamientoService } from 'src/app/services/almacenamiento/almacenamiento.service';

@Injectable({
  providedIn: 'root',
})
export class EstaAutorizadoGuard implements CanActivate {
  constructor(private almacenamientoService: AlmacenamientoService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const role = this.almacenamientoService.getRol();

    if (role && role.trim() != '' && role === route.data.role) {
      return true;
    }
    this.router.navigate(['/restringido']);
    return false;
  }
}
