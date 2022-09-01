import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AreaChartComponent, AreaChartSeries } from '@swimlane/ngx-charts';
import { multi } from '../customer';

@Component({
  selector: 'app-customeractions',
  templateUrl: './customeractions.component.html',
  styleUrls: ['./customeractions.component.css']
})
export class CustomerComponent implements OnInit, AfterViewInit {

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
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;

  public colorScheme: any = {
    domain: ['#e2f2e7', '#e9eed7', '#e3ecfd']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  public ngOnInit(): void {

  }

  private setSeriesBorder(seriesIndex: number, borderColor: string) {
    //:nth-child(1)
    var seriesSelector = document.querySelectorAll('.area-chart-container [ngx-charts-area-series]') || null;
    if (seriesSelector && seriesSelector.length > seriesIndex) {
      var series = seriesSelector[seriesIndex];
      if (series) {
        (<any>series).style.stroke = borderColor;
      }
    }
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.setSeriesBorder(0, '#38a959');
      this.setSeriesBorder(1, '#afb433');
      this.setSeriesBorder(2, '#418af0');
    }, 0);
 
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
