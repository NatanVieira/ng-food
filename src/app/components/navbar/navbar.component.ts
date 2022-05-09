import { Component} from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  qtdItens:number = 0;
  constructor(private pedidoService: PedidoService) { }

  verificaTotalItens(){
    return this.pedidoService.totalItensPedido();
  }
}
