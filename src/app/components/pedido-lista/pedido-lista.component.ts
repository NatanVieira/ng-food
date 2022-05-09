import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IBebida } from 'src/app/models/bebida.model';
import { IComida } from 'src/app/models/comida.model';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-pedido-lista',
  templateUrl: './pedido-lista.component.html',
  styleUrls: ['./pedido-lista.component.scss']
})
export class PedidoListaComponent implements OnInit {
  @Input() mostra: boolean = true;
  @Input() listaItensPedido?: IComida[] | IBebida[];
  @Output() removeItem = new EventEmitter<IComida | IBebida>();
  @Output() removeTudo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.listaItensPedido);
  }

  removerItem(item: IBebida | IComida){
    this.removeItem.emit(item);
  }

  removerTudo(){
    this.removeTudo.emit();
  }

}
