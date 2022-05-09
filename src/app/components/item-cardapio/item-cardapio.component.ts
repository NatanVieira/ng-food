import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { IBebida } from 'src/app/models/bebida.model';
import { IComida } from 'src/app/models/comida.model';

@Component({
  selector: 'ngf-item-cardapio',
  templateUrl: './item-cardapio.component.html',
  styleUrls: ['./item-cardapio.component.scss']
})
export class ItemCardapioComponent implements OnInit {

  lista: IComida[] | IBebida[] = [];
  modelo: string = '';
  constructor(private http: HttpClient) { }
;
  @Input() 
  set tipoCardapio (valor: string){
    this.tipoCardapio = valor;
  }

  ngOnInit(): void {

    if(this.tipoCardapio == 'comidas'){
      this.http
      .get<IComida[]>('http://localhost:3000/comidas')
      .subscribe((resultado) => {
        this.lista = resultado;
      })
    }
    else {
        this.http
        .get<IBebida[]>('http://localhost:3000/bebidas')
        .subscribe((resultado) => {
          this.lista = resultado;
        })
    }
  }

}
