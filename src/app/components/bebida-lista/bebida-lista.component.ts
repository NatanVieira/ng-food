import { Component } from '@angular/core';
import { bebidas } from 'src/app/listas/bebidas';

@Component({
  selector: 'ngf-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.scss']
})

export class BebidaListaComponent {
  listaBebida = bebidas;
  constructor() { }

}
