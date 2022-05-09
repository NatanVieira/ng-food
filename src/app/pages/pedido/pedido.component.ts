import { Component, OnInit } from '@angular/core';
import { IBase } from 'src/app/models/base.model';
import { IBebida } from 'src/app/models/bebida.model';
import { IComida } from 'src/app/models/comida.model';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  listaItensPedido: IComida[] | IBebida[] = [];
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.buscarItensPedido();
  }
  buscarItensPedido(){
    this.listaItensPedido = this.pedidoService.buscarItensPedido();
  }
  removerItem(item: IBebida | IComida){
    this.pedidoService.removerItemPedido(item.id);
  }
  
  removerTudo() {
    this.pedidoService.limpaLista();
    this.buscarItensPedido();
  }
}
