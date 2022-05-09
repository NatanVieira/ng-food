import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBebida } from 'src/app/models/bebida.model';
import { IComida } from 'src/app/models/comida.model';

@Component({
  selector: 'ngf-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.scss']
})
export class ItemCardapioComponent {
  quantidade: number = 0;
  @Input() item?: IComida | IBebida;
  @Input() mostra: boolean = false;
  @Output() adicionaAoPedido = new EventEmitter<IComida | IBebida>();
  
  constructor() { }

  adicionarAoPedido() {
    this.adicionaAoPedido.emit(this.item);
  }

  incrementaQuantidade(){
    this.quantidade++;
  }

  decrementaQuantidade(){
    this.quantidade--;
    this.quantidade = this.quantidade < 0 ? 0 : this.quantidade;
  }
}
