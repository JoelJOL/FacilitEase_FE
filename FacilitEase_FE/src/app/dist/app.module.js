"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var ticket_notes_component_1 = require("./components/layout/ticket-notes/ticket-notes.component");
var ticket_attachments_component_1 = require("./components/layout/ticket-attachments/ticket-attachments.component");
var ticket_notes_attachments_component_1 = require("./components/layout/ticket-notes-attachments/ticket-notes-attachments.component");
var person_card_component_1 = require("./components/ui_elements/person-card/person-card.component");
var ticket_raised_assigned_component_1 = require("./components/layout/ticket-raised-assigned/ticket-raised-assigned.component");
var card_upper_component_1 = require("./components/layout/card-upper/card-upper.component");
var ticket_description_component_1 = require("./components/ui_elements/ticket-description/ticket-description.component");
var ticket_header_component_1 = require("./components/ui_elements/ticket-header/ticket-header.component");
var ticket_info_component_1 = require("./components/layout/ticket-info/ticket-info.component");
var button_component_1 = require("./components/ui_elements/button/button.component");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var profilepic_dropdown_component_1 = require("./components/layout/profilepic-dropdown/profilepic-dropdown.component");
var sidebar_subfield_component_1 = require("./components/ui_elements/sidebar-subfield/sidebar-subfield.component");
var manager_subordinates_component_1 = require("./features/manager/manager-subordinates/manager-subordinates.component");
var manager_component_1 = require("./features/manager/manager/manager.component");
var assign_dropdown_component_1 = require("./components/ui_elements/assign-dropdown/assign-dropdown.component");
var l2admin_component_1 = require("./features/l2admin/l2admin/l2admin.component");
var forms_1 = require("@angular/forms");
var unassigned_tickets_component_1 = require("./features/l2admin/unassigned-tickets/unassigned-tickets.component");
var assigned_tickets_component_1 = require("./features/l2admin/assigned-tickets/assigned-tickets.component");
var sidebar_field_component_1 = require("./components/ui_elements/sidebar-field/sidebar-field.component");
var sidebar_component_1 = require("./components/layout/sidebar/sidebar.component");
var sidebar_logo_component_1 = require("./components/ui_elements/sidebar-logo/sidebar-logo.component");
var sidebar_footer_component_1 = require("./components/ui_elements/sidebar-footer/sidebar-footer.component");
var admin_performance_component_1 = require("./components/ui_elements/admin-performance/admin-performance.component");
var http_2 = require("@angular/common/http");
var ng2_charts_1 = require("ng2-charts");
var bar_chart_component_1 = require("./components/ui_elements/bar-chart/bar-chart.component");
var report_porfile_component_1 = require("./components/ui_elements/report-porfile/report-porfile.component");
var form_service_service_1 = require("./features/service/httpService/Reactive-form/form-service.service");
var reactive_form_component_1 = require("./components/layout/reactive-form/reactive-form.component");
var manager_service_1 = require("./features/service/httpService/React-form-fetch/manager.service");
var approve_deny_service_1 = require("./features/service/httpService/DH-aproveDeny/approve-deny.service");
var header_user_role_dropdown_component_1 = require("./components/ui_elements/header-user-role-dropdown/header-user-role-dropdown.component");
var raise_ticket_title_component_1 = require("./components/ui_elements/raise-ticket-title/raise-ticket-title.component");
var tr_form_component_1 = require("./components/layout/tr-form/tr-form.component");
var tr_subject_component_1 = require("./components/ui_elements/tr-subject/tr-subject.component");
var tr_description_component_1 = require("./components/ui_elements/tr-description/tr-description.component");
var tr_attachments_component_1 = require("./components/ui_elements/tr-attachments/tr-attachments.component");
var forms_2 = require("@angular/forms");
var manager_view_employee_tickets_component_1 = require("./features/manager/manager-view-employee-tickets/manager-view-employee-tickets.component");
var data_table_component_1 = require("./components/layout/data-table/data-table.component");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var agent_ticket_view_component_1 = require("./features/l3admin/agent-ticket-view/agent-ticket-view.component");
var title_sub_component_1 = require("./components/ui_elements/title-sub/title-sub.component");
var modal_component_1 = require("./components/layout/modal/modal.component");
var dialog_1 = require("@angular/material/dialog");
var common_1 = require("@angular/common");
var agent_tickets_view_component_1 = require("./features/l3admin/agent-tickets-view/agent-tickets-view.component");
var animations_1 = require("@angular/platform-browser/animations");
var file_upload_component_1 = require("./components/layout/file-upload/file-upload.component");
var employee_bulkupload_service_1 = require("./features/service/httpService/Employee-bulkUpload/employee-bulkupload.service");
var l3admin_component_1 = require("./features/l3admin/l3admin/l3admin.component");
var modal_1 = require("ngx-bootstrap/modal");
var modal_service_1 = require("./features/service/dataService/modalService/modal.service");
var manager_view_waiting_tickets_component_1 = require("./features/manager/manager-view-waiting-tickets/manager-view-waiting-tickets.component");
var manager_view_ticket_detail_component_1 = require("./features/manager/manager-view-ticket-detail/manager-view-ticket-detail.component");
var escalated_tickets_component_1 = require("./features/l2admin/escalated-tickets/escalated-tickets.component");
var collapse_1 = require("ngx-bootstrap/collapse");
var l2_report_component_1 = require("./components/layout/l2-report/l2-report.component");
var employee_component_1 = require("./features/employee/employee/employee.component");
var icon_1 = require("@angular/material/icon");
var data_table_new_component_1 = require("./components/layout/data-table-new/data-table-new.component");
var sort_up_down_component_1 = require("./components/ui_elements/sort-up-down/sort-up-down.component");
var pagination_component_1 = require("./components/ui_elements/pagination/pagination.component");
var search_bar_component_1 = require("./components/ui_elements/search-bar/search-bar.component");
var filter_component_1 = require("./components/layout/filter/filter.component");
var l2admin_subordinates_component_1 = require("./features/l2admin/l2admin-subordinates/l2admin-subordinates.component");
var header_layout_component_1 = require("./components/layout/header-layout/header-layout.component");
var resolved_tickets_view_component_1 = require("./features/l3admin/resolved-tickets-view/resolved-tickets-view.component");
var ngx_toastr_1 = require("ngx-toastr");
var l1admin_component_1 = require("./features/L1admin/l1admin/l1admin.component");
var l1_data_entry_component_1 = require("./features/L1admin/l1-data-entry/l1-data-entry.component");
var dynamic_search_component_1 = require("./components/ui_elements/dynamic-search/dynamic-search.component");
var highlight_pipe_1 = require("./features/service/highlightPipe/highlight.pipe");
var assign_role_component_1 = require("./features/L1admin/assign-role/assign-role.component");
var display_employee_details_component_1 = require("./components/layout/display-employee-details/display-employee-details.component");
var employee_cards_component_1 = require("./components/layout/employee-cards/employee-cards.component");
var card_1 = require("@angular/material/card");
var add_department_form_component_1 = require("./components/layout/add-department-form/add-department-form.component");
var employee_my_tickets_component_1 = require("./features/employee/employee-my-tickets/employee-my-tickets.component");
var support_component_1 = require("./components/layout/support/support.component");
var departmenthead_component_1 = require("./features/departmenthead/departmenthead/departmenthead.component");
var department_head_data_table_component_1 = require("./features/departmenthead/department-head-data-table/department-head-data-table.component");
var detailed_dh_ticket_component_1 = require("./features/departmenthead/detailed-dh-ticket/detailed-dh-ticket.component");
var role_display_dropdown_component_1 = require("./components/ui_elements/role-display-dropdown/role-display-dropdown.component");
var truncate_pipe_1 = require("./features/service/truncatePipe/truncate.pipe");
var manager_ticket_info_component_1 = require("./features/manager/components/manager-ticket-info/manager-ticket-info.component");
var master_service_1 = require("./features/service/dataService/masterService/master.service");
var confirmation_modal_component_1 = require("./features/manager/components/confirmation-modal/confirmation-modal.component");
var emplycarddisplay_component_1 = require("./components/layout/emplycarddisplay/emplycarddisplay.component");
var employee_add_component_1 = require("./components/layout/employee-add/employee-add.component");
var request_to_cancel_component_1 = require("./features/employee/request-to-cancel/request-to-cancel.component");
var l2admin_ticket_view_component_1 = require("./features/l2admin/l2admin-ticket-view/l2admin-ticket-view.component");
var details_assigned_component_1 = require("./features/l2admin/details-assigned/details-assigned.component");
var details_escalated_component_1 = require("./features/l2admin/details-escalated/details-escalated.component");
var manager_view_ticket_simple_component_1 = require("./features/manager/manager-view-ticket-simple/manager-view-ticket-simple.component");
var ticket_na_simple_component_1 = require("./components/layout/ticket-na-simple/ticket-na-simple.component");
var ticket_detail_view_component_1 = require("./components/layout/ticket-detail-view/ticket-detail-view.component");
var resolved_ticket_view_component_1 = require("./features/l3admin/resolved-ticket-view/resolved-ticket-view.component");
var ticket_detail_view_noedit_component_1 = require("./components/layout/ticket-detail-view-noedit/ticket-detail-view-noedit.component");
var on_hold_tickets_view_component_1 = require("./features/l3admin/on-hold-tickets-view/on-hold-tickets-view.component");
var outside_click_directive_1 = require("./features/service/directive/outside-click/outside-click.directive");
var report_stats_component_1 = require("./components/ui_elements/report-stats/report-stats.component");
var upload_component_1 = require("./features/employee/upload/upload.component");
var login_screen_component_1 = require("./features/Authentication/login-screen/login-screen.component");
var cancel_request_view_component_1 = require("./features/l3admin/cancel-request-view/cancel-request-view.component");
var cancel_request_view_all_component_1 = require("./features/l3admin/cancel-request-view-all/cancel-request-view-all.component");
var msal_angular_1 = require("@azure/msal-angular");
var msal_browser_1 = require("@azure/msal-browser");
var azure_service_1 = require("./features/Authentication/azureService/azure.service");
var skeleton_loader_component_1 = require("./components/layout/skeleton-loader/skeleton-loader.component");
var tracking_timeline_component_1 = require("./components/layout/tracking-timeline/tracking-timeline.component");
<<<<<<< HEAD
var ticket_tracking_component_1 = require("./components/layout/ticket-tracking/ticket-tracking.component");
var onscroll_directive_1 = require("./features/service/directive/onscroll/onscroll.directive");
var tracking_modal_component_1 = require("./components/layout/tracking-modal/tracking-modal.component");
var ticket_documents_component_1 = require("./features/employee/ticket-documents/ticket-documents.component");
var myteam_employee_component_1 = require("./features/employee/myteam-employee/myteam-employee.component");
var unassigned_assets_component_1 = require("./features/Assets/unassigned-assets/unassigned-assets.component");
var employee_assets_component_1 = require("./features/Assets/employee-assets/employee-assets.component");
var notification_service_1 = require("./features/service/httpService/NotificationService/notification.service");
var shared_service_1 = require("./features/service/httpService/SharedService/shared.service");
var generate_report_component_1 = require("./components/ui_elements/generate-report/generate-report.component");
var manager_view_live_employee_tickets_component_1 = require("./features/manager/manager-view-live-employee-tickets/manager-view-live-employee-tickets.component");
=======
var ticket_tracking_component_1 = require("./features/employee/ticket-tracking/ticket-tracking.component");
var onscroll_directive_1 = require("./features/service/directive/onscroll/onscroll.directive");
>>>>>>> bd1a71d8e67facaa55828e75fa8870bd54f6f865
var isIE = window.navigator.userAgent.indexOf('MSIE') > -1 ||
    window.navigator.userAgent.indexOf('Trident/') > -1;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                card_upper_component_1.CardUpperComponent,
                ticket_description_component_1.TicketDescriptionComponent,
                ticket_header_component_1.TicketHeaderComponent,
                ticket_info_component_1.TicketInfoComponent,
                sidebar_field_component_1.SidebarFieldComponent,
                sidebar_component_1.SidebarComponent,
                sidebar_logo_component_1.SidebarLogoComponent,
                sidebar_footer_component_1.SidebarFooterComponent,
                button_component_1.ButtonComponent,
                profilepic_dropdown_component_1.ProfilepicDropdownComponent,
                ticket_notes_component_1.TicketNotesComponent,
                ticket_attachments_component_1.TicketAttachmentsComponent,
                ticket_notes_attachments_component_1.TicketNotesAttachmentsComponent,
                person_card_component_1.PersonCardComponent,
                ticket_raised_assigned_component_1.TicketRaisedAssignedComponent,
                admin_performance_component_1.AdminPerformanceComponent,
                bar_chart_component_1.BarChartComponent,
                report_porfile_component_1.ReportPorfileComponent,
                reactive_form_component_1.ReactiveFormComponent,
                header_user_role_dropdown_component_1.HeaderUserRoleDropdownComponent,
                raise_ticket_title_component_1.RaiseTicketTitleComponent,
                assign_dropdown_component_1.TrDropdownComponent,
                tr_form_component_1.TrFormComponent,
                tr_subject_component_1.TrSubjectComponent,
                tr_description_component_1.TrDescriptionComponent,
                tr_attachments_component_1.TrAttachmentsComponent,
                manager_view_employee_tickets_component_1.ManagerViewEmployeeTicketsComponent,
                data_table_component_1.DataTableComponent,
                agent_ticket_view_component_1.AgentTicketViewComponent,
                title_sub_component_1.TitleSubComponent,
                modal_component_1.ModalComponent,
                agent_tickets_view_component_1.AgentTicketsViewComponent,
                sidebar_subfield_component_1.SidebarSubfieldComponent,
                ticket_tracking_component_1.TicketTrackingComponent,
                manager_component_1.ManagerComponent,
                l2admin_component_1.L2AdminComponent,
                unassigned_tickets_component_1.UnassignedTicketsComponent,
                assigned_tickets_component_1.AssignedTicketsComponent,
                file_upload_component_1.FileUploadComponent,
                l3admin_component_1.L3adminComponent,
                manager_view_waiting_tickets_component_1.ManagerViewWaitingTicketsComponent,
                manager_view_ticket_detail_component_1.ManagerViewTicketDetailComponent,
                escalated_tickets_component_1.EscalatedticketsComponent,
                l2_report_component_1.L2ReportComponent,
                header_layout_component_1.HeaderLayoutComponent,
                data_table_new_component_1.DataTableNewComponent,
                sort_up_down_component_1.SortUpDownComponent,
                pagination_component_1.PaginationComponent,
                search_bar_component_1.SearchBarComponent,
                filter_component_1.FilterComponent,
                employee_component_1.EmployeeComponent,
                l2admin_subordinates_component_1.L2adminSubordinatesComponent,
                l2admin_ticket_view_component_1.L2adminTicketViewComponent,
                resolved_tickets_view_component_1.ResolvedTicketsViewComponent,
                l1admin_component_1.L1adminComponent,
                l1_data_entry_component_1.L1DataEntryComponent,
                dynamic_search_component_1.DynamicSearchComponent,
                highlight_pipe_1.HighlightPipe,
                assign_role_component_1.AssignRoleComponent,
                display_employee_details_component_1.DisplayEmployeeDetailsComponent,
                employee_cards_component_1.EmployeeCardsComponent,
                add_department_form_component_1.AddDepartmentFormComponent,
                employee_my_tickets_component_1.EmployeeMyTicketsComponent,
                support_component_1.SupportComponent,
                departmenthead_component_1.DepartmentheadComponent,
                department_head_data_table_component_1.DepartmentHeadDataTableComponent,
                detailed_dh_ticket_component_1.DetailedDhTicketComponent,
                role_display_dropdown_component_1.RoleDisplayDropdownComponent,
                truncate_pipe_1.TruncatePipe,
                manager_ticket_info_component_1.ManagerTicketInfoComponent,
                manager_subordinates_component_1.ManagerSubordinatesComponent,
                confirmation_modal_component_1.ConfirmationModalComponent,
                emplycarddisplay_component_1.EmplycarddisplayComponent,
                employee_add_component_1.EmployeeAddComponent,
                request_to_cancel_component_1.RequestToCancelComponent,
                details_assigned_component_1.DetailsAssignedComponent,
                details_escalated_component_1.DetailsEscalatedComponent,
                manager_view_ticket_simple_component_1.ManagerViewTicketSimpleComponent,
                ticket_na_simple_component_1.TicketNaSimpleComponent,
                ticket_detail_view_component_1.TicketDetailViewComponent,
                resolved_ticket_view_component_1.ResolvedTicketViewComponent,
                ticket_detail_view_noedit_component_1.TicketDetailViewNoeditComponent,
                on_hold_tickets_view_component_1.OnHoldTicketsViewComponent,
                report_stats_component_1.ReportStatsComponent,
                outside_click_directive_1.OutsideClickDirective,
                login_screen_component_1.LoginScreenComponent,
                upload_component_1.UploadComponent,
                cancel_request_view_component_1.CancelRequestViewComponent,
                cancel_request_view_all_component_1.CancelRequestViewAllComponent,
                skeleton_loader_component_1.SkeletonLoaderComponent,
                tracking_timeline_component_1.TrackingTimelineComponent,
                ticket_tracking_component_1.TicketTrackingComponent,
                onscroll_directive_1.OnscrollDirective,
<<<<<<< HEAD
                tracking_modal_component_1.TrackingModalComponent,
                ticket_documents_component_1.TicketDocumentsComponent,
                myteam_employee_component_1.MyteamEmployeeComponent,
                unassigned_assets_component_1.UnassignedAssetsComponent,
                employee_assets_component_1.EmployeeAssetsComponent,
                generate_report_component_1.GenerateReportComponent,
                manager_view_live_employee_tickets_component_1.ManagerViewLiveEmployeeTicketsComponent,
=======
>>>>>>> bd1a71d8e67facaa55828e75fa8870bd54f6f865
            ],
            imports: [
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                ng2_charts_1.NgChartsModule,
                forms_2.ReactiveFormsModule,
                dropdown_1.BsDropdownModule.forRoot(),
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                dialog_1.MatDialogModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                modal_1.ModalModule.forRoot(),
                collapse_1.CollapseModule.forRoot(),
                icon_1.MatIconModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                card_1.MatCardModule,
                msal_angular_1.MsalModule.forRoot(new msal_browser_1.PublicClientApplication({
                    auth: {
                        clientId: 'd7104f84-ab29-436f-8f06-82fcf8d81381',
                        redirectUri: 'http://localhost:4200',
                        authority: 'https://login.microsoftonline.com/5b751804-232f-410d-bb2f-714e3bb466eb'
                    },
                    cache: {
                        cacheLocation: 'localStorage',
                        storeAuthStateInCookie: isIE
                    }
                }), {
                    interactionType: msal_browser_1.InteractionType.Redirect,
                    authRequest: {
                        scopes: ['user.read']
                    }
                }, {
                    interactionType: msal_browser_1.InteractionType.Redirect,
                    protectedResourceMap: new Map([
                        ['https://graph.microsoft.com/v1.0/me', ['user.Read']],
                    ])
                }),
            ],
            providers: [
                form_service_service_1.FormServiceService,
                manager_service_1.ManagerService,
                approve_deny_service_1.ApproveDenyService,
                employee_bulkupload_service_1.EmployeeBulkuploadService,
                modal_service_1.ModalService,
                master_service_1.MasterService,
<<<<<<< HEAD
                notification_service_1.NotificationService,
                shared_service_1.SharedService,
=======
>>>>>>> bd1a71d8e67facaa55828e75fa8870bd54f6f865
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: msal_angular_1.MsalInterceptor,
                    multi: true
                },
                msal_angular_1.MsalGuard,
                azure_service_1.AzureService,
            ],
            bootstrap: [app_component_1.AppComponent, msal_angular_1.MsalRedirectComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
