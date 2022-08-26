import { Component, OnInit } from '@angular/core';
import {multi} from '../customer';

@Component({
  selector: 'app-customeractions',
  templateUrl: './customeractions.component.html',
  styleUrls: ['./customeractions.component.css']
})
export class CustomerComponent implements OnInit {

  public multi!: any[];
  view: any[] = [1500, 800];

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
    domain: ['#66a76f', '#aeb438', '#4787f1']
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
