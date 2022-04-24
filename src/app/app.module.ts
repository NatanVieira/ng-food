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

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'comida',
    component: ComidaComponent
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
