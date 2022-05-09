import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBebida } from 'src/app/models/bebida.model';
@Component({
  selector: 'ngf-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.scss']
})

export class BebidaListaComponent {
  // listaBebida = bebidas;
  listaBebida: IBebida[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
    .get<IBebida[]>('http://localhost:3000/bebidas')
    .subscribe((resultado) => {
      this.listaBebida = resultado;
    })
  }
}
