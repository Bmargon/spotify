import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SPFService } from 'src/app/services/spf.service';

@Component({
  selector: 'app-top-categorias',
  templateUrl: './top-categorias.component.html',
  styleUrls: ['./top-categorias.component.css']
})
export class TopCategoriasComponent {

  id:string;
  list:any[] = [];

  constructor(private activated:ActivatedRoute,
              private spfService:SPFService,
              private router:Router
    ) { 

      
    this.activated.params.subscribe(info => {
      this.spfService.playCategorias(info['id']);
      this.id = info['id'];
      console.log(this.id);
    });
  

    this.spfService.playCategorias(this.id).subscribe( (listas:any) => {
      this.list = listas;
      console.log(listas);
    });

  }

}
