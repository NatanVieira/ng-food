import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ConteudoComponent } from 'src/app/components/conteudo/conteudo.component';
import { ComidaListaComponent } from './components/comida-lista/comida-lista.component';
import { HomeComponent } from './pages/home/home.component';
import { ComidaComponent } from './pages/comida/comida.component';
import { Route, RouterModule} from '@angular/router';
import { BebidaListaComponent } from './components/bebida-lista/bebida-lista.component';
import { BebidaComponent } from './pages/bebida/bebida.component';
import { HttpClientModule} from '@angular/common/http';
import { ItemCardapioComponent } from './components/item-cardapio/item-cardapio.component';
import { PedidoListaComponent } from './components/pedido-lista/pedido-lista.component';
import { PedidoComponent } from './pages/pedido/pedido.component'

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'comida',
    component: ComidaComponent
  },
  {
    path: 'bebida',
    component: BebidaComponent
  },
  {
    path: 'pedido',
    component: PedidoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConteudoComponent,
    ComidaListaComponent,
    HomeComponent,
    ComidaComponent,
    BebidaListaComponent,
    BebidaComponent,
    ItemCardapioComponent,
    PedidoListaComponent,
    PedidoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
