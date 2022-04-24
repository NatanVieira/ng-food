// import {comidas} from '../../listas/comidas';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cardapio } from 'src/app/models/cardapio.model';

@Component({
  selector: 'ngf-comida-lista',
  templateUrl: './comida-lista.component.html',
  styleUrls: ['./comida-lista.component.scss']
})
export class ComidaListaComponent {
  // listaComida = comidas;
  listaComida: Cardapio[] = [];
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.http
    .get<Cardapio[]>('http://localhost:3000/comidas')
    .subscribe((resultado) => {
      this.listaComida = resultado;
    })
  }
}
