import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { AdminPerformanceComponent } from './components/ui_elements/admin-performance/admin-performance.component';
import { BarChartComponent } from './components/ui_elements/bar-chart/bar-chart.component';
import { ButtonComponent } from './components/ui_elements/button/button.component';
import { ReportPorfileComponent } from './components/ui_elements/report-porfile/report-porfile.component';

export const routes: Routes = [
  { component: SidebarComponent, path: 'report' },
  { component: ReportPorfileComponent, path: 'profile' },
  { component: AdminPerformanceComponent, path: 'report/:id' },
  { component: BarChartComponent, path: 'report/chart/:id' },
  { path: '**', component: ButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
