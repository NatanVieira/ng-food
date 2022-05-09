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

  buscarItensPedido(): IComida[] | IBebida[] {
    return this.listaItensPedido;
  }

  removerItemPedido(id: number) {
    const itemIndex = this.listaItensPedido.findIndex((item) => item.id === id)
    this.listaItensPedido.splice(itemIndex, 1);
  }
}
