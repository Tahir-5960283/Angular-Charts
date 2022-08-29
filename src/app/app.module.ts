import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { InsightsComponent } from './insights/insights.component';
import { CustomerComponent } from './customeractions/customeractions.component';
import { ProgressGraphComponent } from './progress-graph/progress-graph.component';
import { PhotoViewGraphComponent } from './photo-view-graph/photo-view-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MainComponent } from './main/main.component';

import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';

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
    NgxPaginationModule,
    CommonModule
    
      
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
