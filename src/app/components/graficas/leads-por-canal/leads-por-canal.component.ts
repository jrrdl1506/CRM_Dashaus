import { Component } from '@angular/core';
import { NgxChartsModule,  Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-leads-por-canal',
  templateUrl: './leads-por-canal.component.html',
  styleUrls: ['./leads-por-canal.component.scss']
})
export class LeadsPorCanalComponent {

  single = [
    {
      "name": "facebook",
      "value": 4
    },
    {
      "name": "x",
      "value": 6
    },
    {
      "name": "instagram",
      "value": 40
    }
  ];

  view: [number, number]  = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Canal';
  showYAxisLabel = true;
  yAxisLabel = 'Leads';


  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    Object.assign(this.single)
  }

  onSelect(event: any) {
    console.log(event);
  }
}
