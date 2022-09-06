import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { InsightsComponent } from './insights/insights.component';
import { CustomerComponent } from './customeractions/customeractions.component';
import { ProgressGraphComponent } from './progress-graph/progress-graph.component';
import { PhotoViewGraphComponent } from './photo-view-graph/photo-view-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
   InsightsComponent,
    CustomerComponent,
    ProgressGraphComponent,
    PhotoViewGraphComponent,
    PieChartComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxChartsModule,
    HttpClientModule,
    NgxDatatableModule,
    DropdownModule,
    FormsModule
    
      
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
