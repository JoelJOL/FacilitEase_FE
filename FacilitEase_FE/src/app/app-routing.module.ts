import { Component, NgModule } from '@angular/core';
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
import { AssignedTicketsComponent } from './features/l2admin/assigned-tickets/assigned-tickets.component';
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
import { ResolvedTicketsViewComponent } from './features/l3admin/resolved-tickets-view/resolved-tickets-view.component';
import { L3adminComponent } from './features/l3admin/l3admin/l3admin.component';
import { L2AdminComponent } from './features/l2admin/l2admin/l2admin.component';
import { L1adminComponent } from './features/L1admin/l1admin/l1admin.component';
import { AssignRoleComponent } from './features/L1admin/assign-role/assign-role.component';
import { DynamicSearchComponent } from './components/ui_elements/dynamic-search/dynamic-search.component';
import { L1DataEntryComponent } from './features/L1admin/l1-data-entry/l1-data-entry.component';
import { EmployeeComponent } from './features/employee/employee/employee.component';
import { EmployeeCardsComponent } from './components/layout/employee-cards/employee-cards.component';
import { DepartmentHeadDataTableComponent } from './features/departmenthead/department-head-data-table/department-head-data-table.component';
import { DetailedDhTicketComponent } from './features/departmenthead/detailed-dh-ticket/detailed-dh-ticket.component';
import { L2adminTicketViewComponent } from './features/l2admin/l2admin-ticket-view/l2admin-ticket-view.component';
import { EmployeeMyTicketsComponent } from './features/employee/employee-my-tickets/employee-my-tickets.component';
import { DepartmentheadComponent } from './features/departmenthead/departmenthead/departmenthead.component';
import { EmployeeAddComponent } from './components/layout/employee-add/employee-add.component';
import { RequestToCancelComponent } from './features/employee/request-to-cancel/request-to-cancel.component';
import { DetailsAssignedComponent } from './features/l2admin/details-assigned/details-assigned.component';
import { DetailsEscalatedComponent } from './features/l2admin/details-escalated/details-escalated.component';
import { ManagerViewTicketSimpleComponent } from './features/manager/manager-view-ticket-simple/manager-view-ticket-simple.component';
import { ResolvedTicketViewComponent } from './features/l3admin/resolved-ticket-view/resolved-ticket-view.component';
import { OnHoldTicketsViewComponent } from './features/l3admin/on-hold-tickets-view/on-hold-tickets-view.component';
import { EmplycarddisplayComponent } from './components/layout/emplycarddisplay/emplycarddisplay.component';
import { CancelRequestViewAllComponent } from './features/l3admin/cancel-request-view-all/cancel-request-view-all.component';
import { CancelRequestViewComponent } from './features/l3admin/cancel-request-view/cancel-request-view.component';
import { UploadComponent } from './features/employee/upload/upload.component';
import { TicketTrackingComponent } from './components/layout/ticket-tracking/ticket-tracking.component';
import { MsalGuard } from '@azure/msal-angular';
import {
  IsL1Admin,
  IsManager,
  LoginEnter,
} from './features/Authentication/resolve.guard';
import { MyteamEmployeeComponent } from './features/employee/myteam-employee/myteam-employee.component';
import { TicketDocumentsComponent } from './features/employee/ticket-documents/ticket-documents.component';
import { UnassignedAssetsComponent } from './features/Assets/unassigned-assets/unassigned-assets.component';
import { EmployeeAssetsComponent } from './features/Assets/employee-assets/employee-assets.component';

const routes: Routes = [
  {
    path: 'un',
    component: EmployeeAssetsComponent,
  },
  {
    path: 'doc',
    component: TicketDocumentsComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    // canActivate: [MsalGuard],
    // resolve: [LoginEnter],
    children: [
      {
        path: 'employeecard',
        component: EmplycarddisplayComponent,
      },
      {
        path: 'request/:id',
        component: RequestToCancelComponent,
      },
      {
        path: 'my-tickets',
        component: EmployeeMyTicketsComponent,
      },
      {
        path: 'form',
        component: UploadComponent,
      },
      {
        path: 'employee-myteam',
        component: MyteamEmployeeComponent,
      },
    ],
  },

  { path: 'xxx', component: SidebarComponent },
  { path: 'manager-subordinates', component: ManagerSubordinatesComponent },
  {
    path: 'l2admin',
    component: L2AdminComponent,
    children: [
      { path: '', redirectTo: 'unassigned-tickets', pathMatch: 'full' }, // Redirect to 'unassigned-tickets' when 'l2' is accessed directly
      { path: 'unassigned-tickets', component: UnassignedTicketsComponent },
      { path: 'assigned-tickets', component: AssignedTicketsComponent },
      { path: 'escalated-tickets', component: EscalatedticketsComponent },
      { path: 'l2admin-subordinates', component: L2adminSubordinatesComponent },
      { path: 'l2report/:id', component: L2ReportComponent },
      {
        path: 'add-employee',
        component: EmployeeAddComponent,
      },
      {
        path: 'l2admin-ticket-view/:Id',
        component: L2adminTicketViewComponent,
      },
      { path: 'details-assigned/:Id', component: DetailsAssignedComponent },
      { path: 'details-escalated/:Id', component: DetailsEscalatedComponent },
    ],
  },
  {
    path: 'l3admin',
    component: L3adminComponent,
    children: [
      { path: '', redirectTo: 'view-ticket', pathMatch: 'full' },
      { path: 'view-ticket', component: AgentTicketsViewComponent },
      { path: 'resolved-tickets', component: ResolvedTicketsViewComponent },
      { path: 'on-hold-tickets', component: OnHoldTicketsViewComponent },
      {
        path: 'view-ticket-in-detail/:Id',
        component: AgentTicketViewComponent,
      },
      {
        path: 'view-ticket-detail-noedit/:Id',
        component: ResolvedTicketViewComponent,
      },
      { path: 'cancel-requests', component: CancelRequestViewAllComponent },
      {
        path: 'request-to-cancel-detail/:Id',
        component: CancelRequestViewComponent,
      },
      {
        path: 'ticket-tracking',
        component: TicketTrackingComponent,
      },
      {
        path: 'request-to-cancel-detail/:Id',
        component: CancelRequestViewComponent,
      },
      { path: 'l2admin-subordinates', component: L2adminSubordinatesComponent },
      // { path: 'lreport/:id', component: L2ReportComponent },
    ],
  },

  { path: 'sidebar', component: SidebarComponent },
  { path: 'sidebar-field', component: SidebarFieldComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'sidebar-field', component: SidebarFieldComponent },
  {
    path: 'manager',
    component: ManagerComponent,
    // canActivate: [IsManager],
    // canActivateChild: [IsManager],
    children: [
      {
        path: 'manager-view-employee-tickets',
        component: ManagerViewEmployeeTicketsComponent,
      },
      {
        path: 'manager-view-waiting-tickets',
        component: ManagerViewWaitingTicketsComponent,
      },
      {
        path: 'manager-view-ticket-detail/:Id',
        component: ManagerViewTicketDetailComponent,
      },
      {
        path: 'manager-view-ticket-simple/:Id',
        component: ManagerViewTicketSimpleComponent,
      },
      { path: 'manager-subordinates', component: ManagerSubordinatesComponent },
    ],
  },
  { path: 'unassigned-tickets', component: UnassignedTicketsComponent },
  { path: 'assigned-tickets', component: AssignedTicketsComponent },
  { path: 'xxx', component: AgentTicketsViewComponent },
  { path: 'agentticket', component: AgentTicketViewComponent },
  {
    path: 'ticketnotesattachments',
    component: TicketNotesAttachmentsComponent,
  },
  {
    path: 'l1admin',
    component: L1adminComponent,
    // canActivate: [MsalGuard, IsL1Admin],
    // resolve: [LoginEnter],
    children: [{ path: 'entries', component: AssignRoleComponent }],
  },
  {
    path: 'search',
    component: L1DataEntryComponent,
  },

  { path: 'ticketraisedassigned', component: TicketRaisedAssignedComponent },
  { path: 'trform', component: TrFormComponent },
  { path: 'employee-card', component: EmployeeCardsComponent },
  { path: 'l2admin-ticket-view/:Id', component: L2adminTicketViewComponent },
  {
    path: 'departmenthead',
    component: DepartmentheadComponent,
    children: [
      {
        path: 'departmentHead-tickets',
        component: DepartmentHeadDataTableComponent,
      },
      {
        path: 'department-head-tc-detail/:Id',
        component: DetailedDhTicketComponent,
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent,
      },
      {
        path: 'emplycarddisplay',
        component: EmplycarddisplayComponent,
      },
    ],
  },
  { path: '**', component: ButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
