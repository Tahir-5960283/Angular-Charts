import { AfterViewInit, Component, OnInit } from '@angular/core';
import { single } from '../pie';
import { AreaChartComponent,AreaChartSeries } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit,AfterViewInit {


 public single!: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }
   
  public ngOnInit(): void {
    
  }
  private setSeriesBorder(seriesIndex: number, borderColor: string) {
    //:nth-child(1)
    var seriesSelector = document.querySelectorAll('.advanced-pie-chart-container [ngx-charts-advanced-pie-series]') || null;
    if (seriesSelector && seriesSelector.length > seriesIndex) {
      var series = seriesSelector[seriesIndex];
      if (series) {
        (<any>series).style.stroke = borderColor;
      }
    }
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.setSeriesBorder(0, 'green');
      this.setSeriesBorder(1, 'brown');
      this.setSeriesBorder(2, 'blue');
    }, 0);
 
  }
  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



  
}
