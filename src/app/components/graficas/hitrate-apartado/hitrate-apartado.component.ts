import { Component } from '@angular/core';
import { NgxChartsModule,  Color, ScaleType } from '@swimlane/ngx-charts'

import { LeadApiService } from 'src/app/services/lead-api.service';


@Component({
  selector: 'app-hitrate-apartado',
  templateUrl: './hitrate-apartado.component.html',
  styleUrls: ['./hitrate-apartado.component.scss']
})
export class HitrateApartadoComponent {

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    }
  ];


  view: [number, number]  = [700, 400];

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#AAAAAA', '#5AA454','#3b5998',  '#A10A28', '#C7B42C','#5AA454','#5AA454','#5AA454','#5AA454','#5AA454','#5AA454','#5AA454','#5AA454'],
  };

  
  constructor( private LeadApi:LeadApiService) {
    this.LeadApi.getHitrateApartado().subscribe((data:any[])=>{
      this.single = data;
   },error=>{
    alert("Error");
   });

    Object.assign(this.single)
  }

  onSelect() {

  }
}
