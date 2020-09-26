import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{

  @Input() items:any[] = [];

  constructor(private router:Router) { }
  

  cancionesGeneros(item:any){
    let categoriaId = item.id;

    this.router.navigate(['/home', categoriaId]);
  }


}
