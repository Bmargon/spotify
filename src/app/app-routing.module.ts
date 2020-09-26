import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes

import { HomeComponent } from './components/home/home.component';
import { TracksESComponent } from './components/tracks-es/tracks-es.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TopCategoriasComponent } from './components/top-categorias/top-categorias.component';
import { TracksComponent } from './components/tracks/tracks.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/:id', component: TopCategoriasComponent},
  {path: 'home/:id/:lista', component: TracksComponent},
  {path: 'tracks', component: TracksESComponent},
  {path: 'search', component: SearchComponent},
  {path: 'artist/:id', component: ArtistComponent},

  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
