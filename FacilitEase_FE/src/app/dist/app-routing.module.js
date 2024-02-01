"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sidebar_component_1 = require("./components/layout/sidebar/sidebar.component");
var button_component_1 = require("./components/ui_elements/button/button.component");
var agent_tickets_view_component_1 = require("./features/l3admin/agent-tickets-view/agent-tickets-view.component");
var agent_ticket_view_component_1 = require("./features/l3admin/agent-ticket-view/agent-ticket-view.component");
var manager_subordinates_component_1 = require("./features/manager/manager-subordinates/manager-subordinates.component");
var sidebar_field_component_1 = require("./components/ui_elements/sidebar-field/sidebar-field.component");
var manager_component_1 = require("./features/manager/manager/manager.component");
var unassigned_tickets_component_1 = require("./features/l2admin/unassigned-tickets/unassigned-tickets.component");
var assigned_tickets_component_1 = require("./features/l2admin/assigned-tickets/assigned-tickets.component");
var escalated_tickets_component_1 = require("./features/l2admin/escalated-tickets/escalated-tickets.component");
var manager_view_employee_tickets_component_1 = require("./features/manager/manager-view-employee-tickets/manager-view-employee-tickets.component");
var manager_view_waiting_tickets_component_1 = require("./features/manager/manager-view-waiting-tickets/manager-view-waiting-tickets.component");
var manager_view_ticket_detail_component_1 = require("./features/manager/manager-view-ticket-detail/manager-view-ticket-detail.component");
var l2_report_component_1 = require("./components/layout/l2-report/l2-report.component");
var ticket_notes_attachments_component_1 = require("./components/layout/ticket-notes-attachments/ticket-notes-attachments.component");
var ticket_raised_assigned_component_1 = require("./components/layout/ticket-raised-assigned/ticket-raised-assigned.component");
var tr_form_component_1 = require("./components/layout/tr-form/tr-form.component");
var l2admin_subordinates_component_1 = require("./features/l2admin/l2admin-subordinates/l2admin-subordinates.component");
var resolved_tickets_view_component_1 = require("./features/l3admin/resolved-tickets-view/resolved-tickets-view.component");
var l2admin_component_1 = require("./features/l2admin/l2admin/l2admin.component");
var l1admin_component_1 = require("./features/L1admin/l1admin/l1admin.component");
var assign_role_component_1 = require("./features/L1admin/assign-role/assign-role.component");
var l1_data_entry_component_1 = require("./features/L1admin/l1-data-entry/l1-data-entry.component");
var employee_component_1 = require("./features/employee/employee/employee.component");
var employee_cards_component_1 = require("./components/layout/employee-cards/employee-cards.component");
var department_head_data_table_component_1 = require("./features/departmenthead/department-head-data-table/department-head-data-table.component");
var detailed_dh_ticket_component_1 = require("./features/departmenthead/detailed-dh-ticket/detailed-dh-ticket.component");
var l2admin_ticket_view_component_1 = require("./features/l2admin/l2admin-ticket-view/l2admin-ticket-view.component");
var employee_my_tickets_component_1 = require("./features/employee/employee-my-tickets/employee-my-tickets.component");
var manager_view_ticket_simple_component_1 = require("./features/manager/manager-view-ticket-simple/manager-view-ticket-simple.component");
var routes = [
    {
        path: 'employee',
        component: employee_component_1.EmployeeComponent,
        children: [
            {
                path: 'employee-card',
                component: employee_cards_component_1.EmployeeCardsComponent
            },
            {
                path: 'my-tickets',
                component: employee_my_tickets_component_1.EmployeeMyTicketsComponent
            },
            {
                path: 'form',
                component: tr_form_component_1.TrFormComponent
            },
        ]
    },
    { path: 'form', component: tr_form_component_1.TrFormComponent },
    { path: 'xxx', component: sidebar_component_1.SidebarComponent },
    { path: 'l2', component: l2admin_component_1.L2AdminComponent },
    { path: 'sidebar', component: sidebar_component_1.SidebarComponent },
    { path: 'sidebar-field', component: sidebar_field_component_1.SidebarFieldComponent },
    {
        path: 'manager',
        component: manager_component_1.ManagerComponent,
        children: [
            {
                path: 'manager-view-employee-tickets',
                component: manager_view_employee_tickets_component_1.ManagerViewEmployeeTicketsComponent
            },
            {
                path: 'manager-view-waiting-tickets',
                component: manager_view_waiting_tickets_component_1.ManagerViewWaitingTicketsComponent
            },
            {
                path: 'manager-view-ticket-detail/:Id',
                component: manager_view_ticket_detail_component_1.ManagerViewTicketDetailComponent
            },
            {
                path: 'manager-view-ticket-simple/:Id',
                component: manager_view_ticket_simple_component_1.ManagerViewTicketSimpleComponent
            },
            { path: 'manager-subordinates', component: manager_subordinates_component_1.ManagerSubordinatesComponent },
        ]
    },
    { path: 'unassigned-tickets', component: unassigned_tickets_component_1.UnassignedTicketsComponent },
    { path: 'assigned-tickets', component: assigned_tickets_component_1.AssignedTicketsComponent },
    { path: 'view-ticket', component: agent_tickets_view_component_1.AgentTicketsViewComponent },
    { path: 'view-ticket/:id', component: agent_ticket_view_component_1.AgentTicketViewComponent },
    { path: 'resolved-tickets', component: resolved_tickets_view_component_1.ResolvedTicketsViewComponent },
    { path: 'view-ticket-in-detail/:Id', component: agent_ticket_view_component_1.AgentTicketViewComponent },
    { path: 'resolved-tickets', component: resolved_tickets_view_component_1.ResolvedTicketsViewComponent },
    { path: 'escalated-tickets', component: escalated_tickets_component_1.EscalatedticketsComponent },
    { path: 'l2admin-subordinates', component: l2admin_subordinates_component_1.L2adminSubordinatesComponent },
    { path: 'xxx', component: agent_tickets_view_component_1.AgentTicketsViewComponent },
    { path: 'l2report/:id', component: l2_report_component_1.L2ReportComponent },
    { path: 'agentticket', component: agent_ticket_view_component_1.AgentTicketViewComponent },
    {
        path: 'employee',
        component: employee_component_1.EmployeeComponent,
        children: [
            {
                path: 'employee-card',
                component: employee_cards_component_1.EmployeeCardsComponent
            },
            {
                path: 'my-tickets',
                component: employee_my_tickets_component_1.EmployeeMyTicketsComponent
            },
            {
                path: 'form',
                component: tr_form_component_1.TrFormComponent
            },
        ]
    },
    {
        path: 'ticketnotesattachments',
        component: ticket_notes_attachments_component_1.TicketNotesAttachmentsComponent
    },
    {
        path: 'l1',
        component: l1admin_component_1.L1adminComponent
    },
    {
        path: 'search',
        component: l1_data_entry_component_1.L1DataEntryComponent
    },
    {
        path: 'entries',
        component: assign_role_component_1.AssignRoleComponent
    },
    { path: 'ticketraisedassigned', component: ticket_raised_assigned_component_1.TicketRaisedAssignedComponent },
    { path: 'trform', component: tr_form_component_1.TrFormComponent },
    { path: 'employee-card', component: employee_cards_component_1.EmployeeCardsComponent },
    {
        path: 'departmentHead-tickets',
        component: department_head_data_table_component_1.DepartmentHeadDataTableComponent
    },
    {
        path: 'department-head-tc-detail/:Id',
        component: detailed_dh_ticket_component_1.DetailedDhTicketComponent
    },
    { path: 'l2admin-ticket-view/:Id', component: l2admin_ticket_view_component_1.L2adminTicketViewComponent },
    { path: '**', component: button_component_1.ButtonComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
