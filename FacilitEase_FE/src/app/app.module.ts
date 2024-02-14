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
import { FormServiceService } from './features/service/httpService/Reactive-form/form-service.service';
import { ReactiveFormComponent } from './components/layout/reactive-form/reactive-form.component';
import { ManagerService } from './features/service/httpService/React-form-fetch/manager.service';
import { ApproveDenyService } from './features/service/httpService/DH-aproveDeny/approve-deny.service';
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
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AgentTicketsViewComponent } from './features/l3admin/agent-tickets-view/agent-tickets-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadComponent } from './components/layout/file-upload/file-upload.component';
import { EmployeeBulkuploadService } from './features/service/httpService/Employee-bulkUpload/employee-bulkupload.service';
import { L3adminComponent } from './features/l3admin/l3admin/l3admin.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalService } from './features/service/dataService/modalService/modal.service';
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
import { SupportComponent } from './components/layout/support/support.component';
import { DepartmentheadComponent } from './features/departmenthead/departmenthead/departmenthead.component';
import { DepartmentHeadDataTableComponent } from './features/departmenthead/department-head-data-table/department-head-data-table.component';
import { DetailedDhTicketComponent } from './features/departmenthead/detailed-dh-ticket/detailed-dh-ticket.component';
import { RoleDisplayDropdownComponent } from './components/ui_elements/role-display-dropdown/role-display-dropdown.component';
import { TruncatePipe } from './features/service/truncatePipe/truncate.pipe';
import { ManagerTicketInfoComponent } from './features/manager/components/manager-ticket-info/manager-ticket-info.component';
import { MasterService } from './features/service/dataService/masterService/master.service';
import { ConfirmationModalComponent } from './features/manager/components/confirmation-modal/confirmation-modal.component';
import { EmplycarddisplayComponent } from './components/layout/emplycarddisplay/emplycarddisplay.component';
import { EmployeeAddComponent } from './components/layout/employee-add/employee-add.component';
import { RequestToCancelComponent } from './features/employee/request-to-cancel/request-to-cancel.component';
import { L2adminTicketViewComponent } from './features/l2admin/l2admin-ticket-view/l2admin-ticket-view.component';
import { DetailsAssignedComponent } from './features/l2admin/details-assigned/details-assigned.component';
import { DetailsEscalatedComponent } from './features/l2admin/details-escalated/details-escalated.component';
import { ManagerViewTicketSimpleComponent } from './features/manager/manager-view-ticket-simple/manager-view-ticket-simple.component';
import { TicketNaSimpleComponent } from './components/layout/ticket-na-simple/ticket-na-simple.component';
import { TicketDetailViewComponent } from './components/layout/ticket-detail-view/ticket-detail-view.component';
import { ResolvedTicketViewComponent } from './features/l3admin/resolved-ticket-view/resolved-ticket-view.component';
import { TicketDetailViewNoeditComponent } from './components/layout/ticket-detail-view-noedit/ticket-detail-view-noedit.component';
import { OnHoldTicketsViewComponent } from './features/l3admin/on-hold-tickets-view/on-hold-tickets-view.component';
import { OutsideClickDirective } from './features/service/directive/outside-click/outside-click.directive';
import { ReportStatsComponent } from './components/ui_elements/report-stats/report-stats.component';
import { UploadComponent } from './features/employee/upload/upload.component';
import { LoginScreenComponent } from './features/Authentication/login-screen/login-screen.component';
import { CancelRequestViewComponent } from './features/l3admin/cancel-request-view/cancel-request-view.component';
import { CancelRequestViewAllComponent } from './features/l3admin/cancel-request-view-all/cancel-request-view-all.component';
import { HeadersInterceptor } from './headers.interceptor';
import {
  MsalGuard,
  MsalInterceptor,
  MsalModule,
  MsalRedirectComponent,
} from '@azure/msal-angular';

import { AzureService } from './features/Authentication/azureService/azure.service';
import { SkeletonLoaderComponent } from './components/layout/skeleton-loader/skeleton-loader.component';

import { TrackingTimelineComponent } from './components/layout/tracking-timeline/tracking-timeline.component';
import { TicketTrackingComponent } from './components/layout/ticket-tracking/ticket-tracking.component';
import { OnscrollDirective } from './features/service/directive/onscroll/onscroll.directive';
import { TrackingModalComponent } from './components/layout/tracking-modal/tracking-modal.component';
import { TicketDocumentsComponent } from './features/employee/ticket-documents/ticket-documents.component';
import { MyteamEmployeeComponent } from './features/employee/myteam-employee/myteam-employee.component';
import { UnassignedAssetsComponent } from './features/Assets/unassigned-assets/unassigned-assets.component';
import { EmployeeAssetsComponent } from './features/Assets/employee-assets/employee-assets.component';
import { NotificationService } from './features/service/httpService/NotificationService/notification.service';
import { SharedService } from './features/service/httpService/SharedService/shared.service';
import { GenerateReportComponent } from './components/ui_elements/generate-report/generate-report.component';
import { FormValidationDirective } from './features/service/directive/validation/form-validation.directive';
import { ManagerViewLiveEmployeeTicketsComponent } from './features/manager/manager-view-live-employee-tickets/manager-view-live-employee-tickets.component';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { AssignAssetToEmployeeComponent } from './features/Assets/assign-asset-to-employee/assign-asset-to-employee.component';
import { LoadingComponent } from './components/ui_elements/loading/loading.component';
import { NotificationComponent } from './components/layout/notification/notification.component';
import { TicketsToResolveComponent } from './features/l2admin/tickets-to-resolve/tickets-to-resolve.component';
import { DetailsTicketToResolveComponent } from './features/l2admin/details-ticket-to-resolve/details-ticket-to-resolve.component';
import { EditSlaComponent } from './features/L1admin/edit-sla/edit-sla.component';
import { L2CancellationComponent } from './features/l2admin/l2-cancellation/l2-cancellation.component';
import { DetailsL2CancelComponent } from './features/l2admin/details-l2-cancel/details-l2-cancel.component';
import { TicketEscalatedComponent } from './features/L1admin/ticket-escalated/ticket-escalated.component';
import { TicketDetailsEscalatedComponent } from './features/L1admin/ticket-details-escalated/ticket-details-escalated.component';
import { ViewAllTicketsComponent } from './features/L1admin/view-all-tickets/view-all-tickets.component';
import { TicketViewL1Component } from './features/L1admin/ticket-view-l1/ticket-view-l1.component';

const isIE =
  window.navigator.userAgent.indexOf('MSIE') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

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
    TicketTrackingComponent,
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
    ManagerSubordinatesComponent,
    ConfirmationModalComponent,
    EmplycarddisplayComponent,
    EmployeeAddComponent,
    RequestToCancelComponent,
    DetailsAssignedComponent,
    DetailsEscalatedComponent,
    ManagerViewTicketSimpleComponent,
    TicketNaSimpleComponent,
    TicketDetailViewComponent,
    ResolvedTicketViewComponent,
    TicketDetailViewNoeditComponent,
    OnHoldTicketsViewComponent,
    ReportStatsComponent,
    OutsideClickDirective,
    LoginScreenComponent,
    UploadComponent,
    CancelRequestViewComponent,
    CancelRequestViewAllComponent,
    SkeletonLoaderComponent,
    TrackingTimelineComponent,
    TicketTrackingComponent,
    OnscrollDirective,
    TrackingModalComponent,
    TicketDocumentsComponent,
    MyteamEmployeeComponent,
    UnassignedAssetsComponent,
    EmployeeAssetsComponent,
    GenerateReportComponent,
    FormValidationDirective,
    TicketTrackingComponent,
    ManagerViewLiveEmployeeTicketsComponent,
    AssignAssetToEmployeeComponent,
    LoadingComponent,
    NotificationComponent,
    TicketsToResolveComponent,
    DetailsTicketToResolveComponent,
    EditSlaComponent,
    L2CancellationComponent,
    DetailsL2CancelComponent,
    TicketEscalatedComponent,
    TicketDetailsEscalatedComponent,
    ViewAllTicketsComponent,
    TicketViewL1Component,
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
    ToastrModule.forRoot({
      positionClass: 'toast_top_right',
      onActivateTick: true,
    }),
    MatCardModule,

    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: 'd7104f84-ab29-436f-8f06-82fcf8d81381',
          redirectUri: 'http://localhost:4200',
          authority:
            'https://login.microsoftonline.com/5b751804-232f-410d-bb2f-714e3bb466eb',
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: isIE,
        },
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read'],
        },
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          ['https://graph.microsoft.com/v1.0/me', ['user.Read']],
        ]),
      }
    ),
  ],
  providers: [
    FormServiceService,
    ManagerService,
    ApproveDenyService,
    EmployeeBulkuploadService,
    ModalService,
    MasterService,
    NotificationService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    MsalGuard,
    AzureService,
    // { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
