import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { AdminPerformanceComponent } from './components/ui_elements/admin-performance/admin-performance.component';
import { BarChartComponent } from './components/ui_elements/bar-chart/bar-chart.component';
import { ButtonComponent } from './components/ui_elements/button/button.component';
import { ReportPorfileComponent } from './components/ui_elements/report-porfile/report-porfile.component';
import { AgentTicketsViewComponent } from './features/l3admin/agent-tickets-view/agent-tickets-view.component';
import { AgentTicketViewComponent } from './features/l3admin/agent-ticket-view/agent-ticket-view.component';
import { SidebarFooterComponent } from './components/ui_elements/sidebar-footer/sidebar-footer.component';
import { ManagerSubordinatesComponent } from './features/manager/manager-subordinates/manager-subordinates.component';
import { SidebarFieldComponent } from './components/ui_elements/sidebar-field/sidebar-field.component';
import { ManagerComponent } from './features/manager/manager/manager.component';
import { UnassignedTicketsComponent } from './components/ui_elements/unassigned-tickets/unassigned-tickets.component';
import { AssignedTicketsComponent } from './assigned-tickets/assigned-tickets.component';
import { ManagerViewEmployeeTicketsComponent } from './features/manager/manager-view-employee-tickets/manager-view-employee-tickets.component';
import { ManagerViewWaitingTicketsComponent } from './features/manager/manager-view-waiting-tickets/manager-view-waiting-tickets.component';
import { ManagerViewTicketDetailComponent } from './features/manager/manager-view-ticket-detail/manager-view-ticket-detail.component';

const routes: Routes = [
  { path: 'xxx', component: SidebarComponent }, // Default route to Home component
  { path: 'manager-subordinates', component: ManagerSubordinatesComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'sidebar-field', component: SidebarFieldComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'unassigned-tickets', component: UnassignedTicketsComponent },
  { path: 'assigned-tickets', component: AssignedTicketsComponent },
  { path: 'xxx', component: AgentTicketsViewComponent },
  { path: 'agentticket', component: AgentTicketViewComponent },
  { path: 'manager-view-employee-tickets', component:ManagerViewEmployeeTicketsComponent},
  { path: 'manager-view-waiting-tickets', component:ManagerViewWaitingTicketsComponent},
  { path: 'manager-view-ticket-detail', component:ManagerViewTicketDetailComponent},

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
