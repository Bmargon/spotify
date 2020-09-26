import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TracksESComponent } from './components/tracks-es/tracks-es.component';
import { CardsComponent } from './components/shared/cards/cards.component';

import { HttpClientModule } from '@angular/common/http';
import { TopCategoriasComponent } from './components/top-categorias/top-categorias.component';
import { TableComponent } from './components/shared/table/table.component';
import { TracksComponent } from './components/tracks/tracks.component';

import {DomseguroPipe} from '../assets/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    SearchComponent,
    ArtistComponent,
    TracksESComponent,
    TopCategoriasComponent,
    CardsComponent,
    TableComponent,
    TracksComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
