import { Component} from '@angular/core';

@Component({
  selector: 'ngf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  QtdPedido: number = 0;
  constructor() { }

  adicionaItemAoPedido(){
    this.QtdPedido++;
  }
}
