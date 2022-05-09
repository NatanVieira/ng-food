// import {comidas} from '../../listas/comidas';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComida } from 'src/app/models/comida.model';
import { PedidoService } from 'src/app/services/pedido.service';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'ngf-comida-lista',
  templateUrl: './comida-lista.component.html',
  styleUrls: ['./comida-lista.component.scss']
})
export class ComidaListaComponent {
  // listaComida = comidas;
  listaComida: IComida[] = [];
  constructor(private comidaService: ComidaService,
              private pedidoService: PedidoService) { }
  
  ngOnInit(): void {
    this.comidaService.devolverComidas().subscribe((resultado:IComida[]) => {this.listaComida = resultado});
  }

  adicionarComida(comida: any){
    this.pedidoService.adicionaItemPedido(comida.item, comida.quantidade);
  }

}
