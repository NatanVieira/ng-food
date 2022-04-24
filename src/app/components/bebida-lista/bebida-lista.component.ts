import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cardapio } from 'src/app/models/cardapio.model';
@Component({
  selector: 'ngf-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.scss']
})

export class BebidaListaComponent {
  // listaBebida = bebidas;
  listaBebida: Cardapio[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
    .get<Cardapio[]>('http://localhost:3000/bebidas')
    .subscribe((resultado) => {
      this.listaBebida = resultado;
    })
  }
}
