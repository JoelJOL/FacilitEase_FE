import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketNotesComponent } from './components/layout/ticket-notes/ticket-notes.component';
import { TicketAttachmentsComponent } from './components/layout/ticket-attachments/ticket-attachments.component';
import { TicketNotesAttachmentsComponent } from './components/layout/ticket-notes-attachments/ticket-notes-attachments.component';
import { PersonCardComponent } from './components/ui_elements/person-card/person-card.component';
import { TicketRaisedAssignedComponent } from './components/layout/ticket-raised-assigned/ticket-raised-assigned.component';
import { CardUpperComponent } from './components/layout/card-upper/card-upper.component';
import { TicketDescriptionComponent } from './components/ui_elements/ticket-description/ticket-description.component';
import { TicketHeaderComponent } from './components/ui_elements/ticket-header/ticket-header.component';
import { TicketInfoComponent } from './components/layout/ticket-info/ticket-info.component';
import { ButtonComponent } from './components/ui_elements/button/button.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProfilepicDropdownComponent } from './components/layout/profilepic-dropdown/profilepic-dropdown.component';
import { SidebarSubfieldComponent } from './components/ui_elements/sidebar-subfield/sidebar-subfield.component';
import { ManagerSubordinatesComponent } from './features/manager/manager-subordinates/manager-subordinates.component';
import { ManagerComponent } from './features/manager/manager/manager.component';
import { TrDropdownComponent } from './components/ui_elements/assign-dropdown/assign-dropdown.component';
import { L2AdminComponent } from './features/l2admin/l2admin/l2admin.component';
import { FormsModule } from '@angular/forms';
import { UnassignedTicketsComponent } from './features/l2admin/unassigned-tickets/unassigned-tickets.component';
import { AssignedTicketsComponent } from './features/l2admin/assigned-tickets/assigned-tickets.component';
import { SidebarFieldComponent } from './components/ui_elements/sidebar-field/sidebar-field.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { SidebarLogoComponent } from './components/ui_elements/sidebar-logo/sidebar-logo.component';
import { SidebarFooterComponent } from './components/ui_elements/sidebar-footer/sidebar-footer.component';
import { AdminPerformanceComponent } from './components/ui_elements/admin-performance/admin-performance.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/ui_elements/bar-chart/bar-chart.component';
import { ReportPorfileComponent } from './components/ui_elements/report-porfile/report-porfile.component';
import { FormServiceService } from './features/service/httpService/form-service.service';
import { ReactiveFormComponent } from './components/layout/reactive-form/reactive-form.component';
import { ManagerService } from './features/service/httpService/manager.service';
import { ApproveDenyService } from './features/service/httpService/approve-deny.service';
import { HeaderUserRoleDropdownComponent } from './components/ui_elements/header-user-role-dropdown/header-user-role-dropdown.component';
import { RaiseTicketTitleComponent } from './components/ui_elements/raise-ticket-title/raise-ticket-title.component';
import { TrFormComponent } from './components/layout/tr-form/tr-form.component';
import { TrSubjectComponent } from './components/ui_elements/tr-subject/tr-subject.component';
import { TrDescriptionComponent } from './components/ui_elements/tr-description/tr-description.component';
import { TrAttachmentsComponent } from './components/ui_elements/tr-attachments/tr-attachments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagerViewEmployeeTicketsComponent } from './features/manager/manager-view-employee-tickets/manager-view-employee-tickets.component';
import { DataTableComponent } from './components/layout/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AgentTicketViewComponent } from './features/l3admin/agent-ticket-view/agent-ticket-view.component';
import { TitleSubComponent } from './components/ui_elements/title-sub/title-sub.component';
import { ModalComponent } from './components/layout/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AgentTicketsViewComponent } from './features/l3admin/agent-tickets-view/agent-tickets-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadComponent } from './components/layout/file-upload/file-upload.component';
import { EmployeeBulkuploadService } from './features/service/httpService/employee-bulkupload.service';
import { L3adminComponent } from './features/l3admin/l3admin/l3admin.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalService } from './features/service/dataService/modal.service';
import { ManagerViewWaitingTicketsComponent } from './features/manager/manager-view-waiting-tickets/manager-view-waiting-tickets.component';
import { ManagerViewTicketDetailComponent } from './features/manager/manager-view-ticket-detail/manager-view-ticket-detail.component';
import { EscalatedticketsComponent } from './features/l2admin/escalated-tickets/escalated-tickets.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { L2ReportComponent } from './components/layout/l2-report/l2-report.component';
import { EmployeeComponent } from './features/employee/employee/employee.component';
import { MatIconModule } from '@angular/material/icon';
import { DataTableNewComponent } from './components/layout/data-table-new/data-table-new.component';
import { SortUpDownComponent } from './components/ui_elements/sort-up-down/sort-up-down.component';
import { PaginationComponent } from './components/ui_elements/pagination/pagination.component';
import { SearchBarComponent } from './components/ui_elements/search-bar/search-bar.component';
import { FilterComponent } from './components/layout/filter/filter.component';
import { L2adminSubordinatesComponent } from './features/l2admin/l2admin-subordinates/l2admin-subordinates.component';
import { L2adminTicketViewComponent } from './features/l2admin/l2admin-ticket-view/l2admin-ticket-view.component';
import { HeaderLayoutComponent } from './components/layout/header-layout/header-layout.component';
import { ResolvedTicketsViewComponent } from './features/l3admin/resolved-tickets-view/resolved-tickets-view.component';
import { ToastrModule } from 'ngx-toastr';
import { L1adminComponent } from './features/L1admin/l1admin/l1admin.component';
import { L1DataEntryComponent } from './features/L1admin/l1-data-entry/l1-data-entry.component';
import { DynamicSearchComponent } from './components/ui_elements/dynamic-search/dynamic-search.component';
import { HighlightPipe } from './features/service/highlightPipe/highlight.pipe';
import { AssignRoleComponent } from './features/L1admin/assign-role/assign-role.component';
import { DisplayEmployeeDetailsComponent } from './components/layout/display-employee-details/display-employee-details.component';
import { EmployeeCardsComponent } from './components/layout/employee-cards/employee-cards.component';
import { MatCardModule } from '@angular/material/card';
import { AddDepartmentFormComponent } from './components/layout/add-department-form/add-department-form.component';
import { EmployeeMyTicketsComponent } from './features/employee/employee-my-tickets/employee-my-tickets.component';
import { SupportComponent } from './components/ui_elements/support/support.component';
import { DepartmentheadComponent } from './features/departmenthead/departmenthead/departmenthead.component';
import { DepartmentHeadDataTableComponent } from './features/departmenthead/department-head-data-table/department-head-data-table.component';
import { DetailedDhTicketComponent } from './features/departmenthead/detailed-dh-ticket/detailed-dh-ticket.component';
import { RoleDisplayDropdownComponent } from './components/ui_elements/role-display-dropdown/role-display-dropdown.component';
import { TruncatePipe } from './features/service/truncatePipe/truncate.pipe';
import { ManagerTicketInfoComponent } from './features/manager/components/manager-ticket-info/manager-ticket-info.component';
import { MasterService } from './features/service/dataService/master.service';
import { ConfirmationModalComponent } from './features/manager/components/confirmation-modal/confirmation-modal.component';
import { SupportComponent } from './components/layout/support/support.component';
@NgModule({
  declarations: [
    AppComponent,
    CardUpperComponent,
    TicketDescriptionComponent,
    TicketHeaderComponent,
    TicketInfoComponent,
    SidebarFieldComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarFooterComponent,
    ButtonComponent,
    ProfilepicDropdownComponent,
    TicketNotesComponent,
    TicketAttachmentsComponent,
    TicketNotesAttachmentsComponent,
    PersonCardComponent,
    TicketRaisedAssignedComponent,
    AdminPerformanceComponent,
    BarChartComponent,
    ReportPorfileComponent,
    ReactiveFormComponent,
    HeaderUserRoleDropdownComponent,
    RaiseTicketTitleComponent,
    TrDropdownComponent,
    TrFormComponent,
    TrSubjectComponent,
    TrDescriptionComponent,
    TrAttachmentsComponent,
    ManagerViewEmployeeTicketsComponent,
    DataTableComponent,
    AgentTicketViewComponent,
    TitleSubComponent,
    ModalComponent,
    AgentTicketsViewComponent,
    SidebarSubfieldComponent,
    ManagerSubordinatesComponent,
    ManagerComponent,
    L2AdminComponent,
    UnassignedTicketsComponent,
    AssignedTicketsComponent,
    FileUploadComponent,
    L3adminComponent,
    ManagerViewWaitingTicketsComponent,
    ManagerViewTicketDetailComponent,
    EscalatedticketsComponent,
    L2ReportComponent,
    HeaderLayoutComponent,
    DataTableNewComponent,
    SortUpDownComponent,
    PaginationComponent,
    SearchBarComponent,
    FilterComponent,
    EmployeeComponent,
    L2adminSubordinatesComponent,
    L2adminTicketViewComponent,
    ResolvedTicketsViewComponent,
    L1adminComponent,
    L1DataEntryComponent,
    DynamicSearchComponent,
    HighlightPipe,
    AssignRoleComponent,
    DisplayEmployeeDetailsComponent,
    EmployeeCardsComponent,
    AddDepartmentFormComponent,
    EmployeeMyTicketsComponent,
    SupportComponent,
    DepartmentheadComponent,
    DepartmentHeadDataTableComponent,
    DetailedDhTicketComponent,
    RoleDisplayDropdownComponent,
    TruncatePipe,
    ManagerTicketInfoComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    MatIconModule,
    ToastrModule.forRoot(),
    MatCardModule,
  ],
  providers: [
    FormServiceService,
    ManagerService,
    ApproveDenyService,
    EmployeeBulkuploadService,
    ModalService,
    MasterService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
