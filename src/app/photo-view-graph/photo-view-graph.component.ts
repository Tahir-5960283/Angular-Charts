import { Component, OnInit } from '@angular/core';
import { multi } from '../photo-view-graph';

@Component({
  selector: 'app-photo-view-graph',
  templateUrl: './photo-view-graph.component.html',
  styleUrls: ['./photo-view-graph.component.css']
})
export class PhotoViewGraphComponent implements OnInit {

  public multi!: any[];
  view: any[] = [1200, 700];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string='';
  yAxisLabel: string='';
  timeline: boolean = true;

  colorScheme: any = {
    domain: ['#4688f6', '#bd5752']
  };


  constructor() {
    Object.assign(this, { multi });
  }

  public ngOnInit(): void {

  }

  onActivate(customer: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(customer)));

  }

  onDeactivate(customer: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(customer)));
  }

  onSelect(customer: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(customer)));
  }

}
