import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  tipoLista: string | null | undefined;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.url.subscribe((url) => {
      this.tipoLista = this.activatedRoute.snapshot.paramMap.get('tipo-lista'); 
    });
  }
}
