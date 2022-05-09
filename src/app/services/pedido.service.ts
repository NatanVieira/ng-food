import { Injectable } from '@angular/core';
import { IBebida } from '../models/bebida.model';
import { IComida } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  listaItensPedido: IComida[] | IBebida[] = [];
  constructor() { }

  totalItensPedido(){
    return this.listaItensPedido.length;
  }

  adicionaItemPedido(item:IComida | IBebida){
    this.listaItensPedido.push(item);
  }

  limpaLista(){
    this.listaItensPedido = [];
  }

  removeItemLista(item:IComida | IBebida){
    const indice = this.listaItensPedido.findIndex((x) => x.id === item.id);
    this.listaItensPedido.splice(indice,1);
  }
}