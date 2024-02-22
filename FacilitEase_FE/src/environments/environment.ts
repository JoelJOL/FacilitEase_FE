export const environment = {
  production: false,
  postLogoutUrl: 'http://localhost:4200',
};
//Roles
export const l1Admin = 'l1admin';
export const l2Admin = 'l2admin';
export const l3Admin = 'l3admin';
export const Employee = 'employee';
export const Manager = 'manager';
export const DepartmentHead = 'departmenthead';

//Routing Paths

//Employee
export const RaiseTicketForm = 'raise-ticket';
export const Tickets = 'tickets';
export const TicketDetails = 'ticket-details';

//Admins

//L1Admin

//L2Admin
export const UnassignedTickets = 'unassigned-tickets';
export const AssignedTickets = 'assigned-tickets';
export const EscalatedTickets = 'escalated-tickets';
export const TicketsToResolve = 'tickets-to-resolve';
export const CancellationRequest = 'cancellation-requests';
export const Report = 'report';
export const UnassignedTicketDetails = 'admin-ticket-view';
export const AssignedTicketDetails = 'details-assigned';
export const EscalatedTicketDetails = 'details-escalated';
export const TicketsToResolveTicketDetails = 'details-tickets-to-resolve';
export const CancellationRequestTicketDetails = 'cancel-requests';

//L3Admin
export const ResolvedTickets = 'resolved-tickets';
export const ApprovalPendingTickets = 'pending-approval';
export const PendingAndResolvedTicketDetails = 'ticket-detailed';

//Manager
export const EmployeeTickets = 'manager-view-employee-tickets';
export const EmployeeTicketDetails = 'manager-view-ticket-simple';
export const ActiveTickets = 'active-tickets';
