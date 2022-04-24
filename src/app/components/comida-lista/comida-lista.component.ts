import {comidas} from '../../listas/comidas';
import { Component } from '@angular/core';

@Component({
  selector: 'ngf-comida-lista',
  templateUrl: './comida-lista.component.html',
  styleUrls: ['./comida-lista.component.scss']
})
export class ComidaListaComponent {
  listaComida = comidas;
  constructor() { }
}
