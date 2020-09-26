import { Component, ViewChild, ElementRef } from '@angular/core';
import { SPFService } from 'src/app/services/spf.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  
  @ViewChild('radio1') radio1: ElementRef;
  @ViewChild('radio2') radio2: ElementRef;

  tipo:string;
  busqueda:string;
  selector: boolean;
  resultado:any[] = []; 
  
  constructor(private spfService:SPFService) { 
  }
  

  search(parametroBusqueda){
    
    this.busqueda = parametroBusqueda;
    
      this.tipo = 'track';
   
    

    this.spfService.busqueda(this.busqueda, this.tipo).subscribe((data:any)=> {
      this.resultado = data.tracks.items;
      console.log(this.resultado);
    })
  }
  


}
