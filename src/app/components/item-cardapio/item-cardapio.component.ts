import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBebida } from 'src/app/models/bebida.model';
import { IComida } from 'src/app/models/comida.model';

@Component({
  selector: 'ngf-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.scss']
})
export class ItemCardapioComponent {

  @Input() item?: IComida | IBebida;

  @Output() adicionaAoPedido = new EventEmitter<IComida | IBebida>();
  
  constructor() { }

  adicionarAoPedido() {
    this.adicionaAoPedido.emit(this.item);
  }
}
