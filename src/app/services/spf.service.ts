import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SPFService {

  
  constructor( private http:HttpClient ) { }


  master(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQAhYMskf2Zj20b6gPVmUadOPxiCs3DFJ326HrhqXbajW3HNP5ZJ19mbez_iFAp2Rq5lLazFtrXS0cbfnH0'
    });

    return this.http.get(url, {headers});
  }



  categorias(){

    return this.master('browse/categories?country=es&locale=se&limit=21').pipe(map((data:any) => {
            return data.categories['items'];
    }));
  }

  playCategorias(categoria:string){
    return this.master(`browse/categories/${categoria}/playlists?country=es&limit=21`).pipe(map( (data:any) => {
      return data.playlists['items'];
    }));
  }
  
  tracks(id:string){
    return this.master(`playlists/${id}/tracks?market=es&limit=21`).pipe(map((data:any) => {
      return data['items'];
    }));
  }
  
  busqueda(item:string, tipo:string){
    return this.master(`search?q=${ item }&type=${ tipo }&market=es&limit=21`);
  }

}
