import { Component, OnInit } from '@angular/core';
// import { multi } from '../data';
import { multi } from '../graph';
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

 
  public multi!: any[];
  view: any[] = [1200, 600];

  // options

  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string ='';
  yAxisLabel: string ='';
  timeline: boolean = true;

  colorScheme: any = {
    domain: ['#e37224','#e84643']
  };


  constructor() {
    Object.assign(this, { multi });

  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  public ngOnInit(): void {
  }

  

}
