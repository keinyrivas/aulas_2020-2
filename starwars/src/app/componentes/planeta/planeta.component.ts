import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetasService } from 'src/app/services/planetas.service';


@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})

export class PlanetaComponent implements OnInit {

 
  constructor(private route: ActivatedRoute, private planetaServ: PlanetasService) { }


  id: number;
  planeta: any;
  
  ngOnInit(): void {
      
 
  
      this.route.params.subscribe(params => {
          this.id = params['id'];
          console.log(this.id);

         this.planetaServ.getPlaneta(this.id)
         .subscribe(planeta => {
           this.planeta = planeta;
           console.log(this.planeta);
        });
      });



    }

}