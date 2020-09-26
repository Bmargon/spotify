import { Component, OnInit } from '@angular/core';
import { SPFService } from 'src/app/services/spf.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  categorias:any[] = [];

  constructor( private spfService: SPFService ) { 

   this.spfService.categorias().subscribe((data:any) => {
     console.log(data);
     this.categorias = data;
    });
     
  }
  ngOnInit() {
  }

}
