import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AreaChartComponent, AreaChartSeries } from '@swimlane/ngx-charts';

// import { multi } from '../data';
import { multi } from '../graph';
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit, AfterViewInit {


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
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;

  colorScheme: any = {
    domain: ['#fbe9dd', '#f9dad5']
  };


  constructor() {
    Object.assign(this, { multi });

  }
  public ngOnInit(): void {
  }

  private setSeriesBorder(seriesIndex: number, borderColor: string) {
    //:nth-child(1)
    var seriesSelector = document.querySelectorAll('.area-chart-container-2 [ngx-charts-area-series]') || null;
    if (seriesSelector && seriesSelector.length > seriesIndex) {
      var series = seriesSelector[seriesIndex];
      if (series) {
        (<any>series).style.stroke = borderColor;
      }
    }
  }


  public ngAfterViewInit() {
    setTimeout(() => {
      this.setSeriesBorder(0, 'rgb(230, 89, 23)');
      this.setSeriesBorder(1, 'red');

    }, 0);

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



}
