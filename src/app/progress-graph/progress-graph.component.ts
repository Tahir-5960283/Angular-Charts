import { Component, OnInit } from '@angular/core';
import { single } from '../progress-graph';
// import { multi } from '../progress-graph';

@Component({
  selector: 'app-progress-graph',
  templateUrl: './progress-graph.component.html',
  styleUrls: ['./progress-graph.component.css']
})
export class ProgressGraphComponent  {

 public single!: any[];
 public  multi!: any[];

  view: any[] = [1200, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';

  colorScheme = {
    domain: ['#4588f1', '#4588f1', '#4588f1', '#4588f1']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event:any) {
    console.log(event);
  }

}
