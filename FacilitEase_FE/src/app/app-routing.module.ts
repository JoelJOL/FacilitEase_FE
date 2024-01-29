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
import { UnassignedTicketsComponent } from './features/l2admin/unassigned-tickets/unassigned-tickets.component';
import { AssignedTicketsComponent } from './features/assigned-tickets/assigned-tickets.component';
import { EscalatedticketsComponent } from './features/l2admin/escalated-tickets/escalated-tickets.component';
import { ManagerViewEmployeeTicketsComponent } from './features/manager/manager-view-employee-tickets/manager-view-employee-tickets.component';
import { ManagerViewWaitingTicketsComponent } from './features/manager/manager-view-waiting-tickets/manager-view-waiting-tickets.component';
import { ManagerViewTicketDetailComponent } from './features/manager/manager-view-ticket-detail/manager-view-ticket-detail.component';
import { L2ReportComponent } from './components/layout/l2-report/l2-report.component';
import { CardUpperComponent } from './components/layout/card-upper/card-upper.component';
import { DataTableComponent } from './components/layout/data-table/data-table.component';
import { FileUploadComponent } from './components/layout/file-upload/file-upload.component';
import { HeaderLayoutComponent } from './components/layout/header-layout/header-layout.component';
import { ModalComponent } from './components/layout/modal/modal.component';
import { ProfilepicDropdownComponent } from './components/layout/profilepic-dropdown/profilepic-dropdown.component';
import { ReactiveFormComponent } from './components/layout/reactive-form/reactive-form.component';
import { TicketAttachmentsComponent } from './components/layout/ticket-attachments/ticket-attachments.component';
import { TicketInfoComponent } from './components/layout/ticket-info/ticket-info.component';
import { TicketNotesAttachmentsComponent } from './components/layout/ticket-notes-attachments/ticket-notes-attachments.component';
import { TicketRaisedAssignedComponent } from './components/layout/ticket-raised-assigned/ticket-raised-assigned.component';
import { TrFormComponent } from './components/layout/tr-form/tr-form.component';
import { L2adminSubordinatesComponent } from './features/l2admin/l2admin-subordinates/l2admin-subordinates.component';
import { L3adminComponent } from './features/l3admin/l3admin/l3admin.component';
import { L2AdminComponent } from './features/l2admin/l2admin/l2admin.component';
import { L1adminComponent } from './features/L1admin/l1admin/l1admin.component';
import { AssignRoleComponent } from './features/L1admin/assign-role/assign-role.component';
import { DynamicSearchComponent } from './components/ui_elements/dynamic-search/dynamic-search.component';
import { L1DataEntryComponent } from './features/L1admin/l1-data-entry/l1-data-entry.component';
const routes: Routes = [
  { path: 'form', component: TrFormComponent },
  { path: 'xxx', component: SidebarComponent }, // Default route to Home component
  { path: 'manager-subordinates', component: ManagerSubordinatesComponent },
  { path: 'l2', component: L2AdminComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'sidebar-field', component: SidebarFieldComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'unassigned-tickets', component: UnassignedTicketsComponent },
  { path: 'assigned-tickets', component: AssignedTicketsComponent },
  { path: 'view-ticket', component: AgentTicketsViewComponent },
  { path: 'view-ticket/:id', component: AgentTicketViewComponent },
  { path: 'escalated-tickets', component: EscalatedticketsComponent },
  { path: 'l2admin-subordinates', component: L2adminSubordinatesComponent },
  { path: 'xxx', component: AgentTicketsViewComponent },
  { path: 'l2report/:id', component: L2ReportComponent },
  { path: 'agentticket', component: AgentTicketViewComponent },
  {
    path: 'ticketnotesattachments',
    component: TicketNotesAttachmentsComponent,
  },
  {
    path: 'l1',
    component: L1adminComponent,
  },
  {
    path: 'search',
    component: L1DataEntryComponent,
  },
  {
    path: 'entries',
    component: AssignRoleComponent,
  },
  { path: 'ticketraisedassigned', component: TicketRaisedAssignedComponent },
  { path: 'trform', component: TrFormComponent },
  { path: '**', component: ButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
