import { Component } from '@angular/core';
import { SPFService } from 'src/app/services/spf.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent  {
  
  tracks:any[] = [];

  constructor(private spfService:SPFService,
              private activated:ActivatedRoute) { 
                this.activated.params.subscribe(data=>{


                  this.spfService.tracks(data.lista).subscribe((data:any) => {
                  this.tracks = data;

                    console.log(this.tracks);
                  });
                })
              }

  


}

