import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { CustomerComponent } from './customeractions/customeractions.component';
import { InsightsComponent } from './insights/insights.component';
import { MainComponent } from './main/main.component';
import { PhotoViewGraphComponent } from './photo-view-graph/photo-view-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ProgressGraphComponent } from './progress-graph/progress-graph.component';

const routes: Routes = [

  { path: 'app-chart', component: ChartComponent },
  // { path: 'app-graph-insights', component: GraphComponent },
  { path: 'customeractions', component:CustomerComponent },
  { path: 'app-progress-graph', component: ProgressGraphComponent },
  { path: 'app-photo-view-graph', component: PhotoViewGraphComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'main', component: MainComponent }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
