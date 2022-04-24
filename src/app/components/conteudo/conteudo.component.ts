import { Component} from '@angular/core';

@Component({
  selector: 'ngf-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})

export class ConteudoComponent {
  constructor() {  }

  arrItem = [
    {
      pathImg: '../assets/img/pizza.png',
      titulo: 'COMIDA'
    },
    {
      pathImg: '../assets/img/bebida.jpg',
      titulo: 'BEBIDA'
    }
  ]

  mostraAlert(titulo: string) {
    alert(titulo);
  }

}
