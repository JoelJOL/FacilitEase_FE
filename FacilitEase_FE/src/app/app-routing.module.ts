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
const routes: Routes = [
  { path: 'cardupper', component: CardUpperComponent },
  { path: 'datatable', component: DataTableComponent },
  { path: 'fileupload', component: FileUploadComponent },
  { path: 'headerlayout', component: HeaderLayoutComponent },
  { path: 'l2report/:id', component: L2ReportComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'profilepicdropdown', component: ProfilepicDropdownComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'ticketattachments', component: TicketAttachmentsComponent },
  { path: 'ticketinfo', component: TicketInfoComponent },
  { path: 'ticketnotes', component: TicketNotesAttachmentsComponent },
  {
    path: 'ticketnotesattachments',
    component: TicketNotesAttachmentsComponent,
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
