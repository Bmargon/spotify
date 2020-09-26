import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  @Input() items:any[] = [];

  constructor(private router:Router, 
              private activated:ActivatedRoute) { 
              }
  
    
  navigation(item:any){

    this.activated.params.subscribe( (params) => {
        let id = params['id'];
        let lista = item.id;
        console.log(item);
        this.router.navigate(['/home', id, lista]);
      });
  }
}
