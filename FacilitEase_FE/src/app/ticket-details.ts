export interface TicketDetails {
    id: number;
    ticketName: string;
    ticketDescription: string;
    priorityName: string;
    statusName: string;
    submittedDate: Date;
    employeeName: string;
    locationName: string;
    managerName: string;
    deptName: string;
    managerId?: number;
    documentLink: string;
    projectCode: number;
    notes:string;
    lastUpdate : string;
    assignedTo:string;
  }

  export interface TicketDetailsArray extends Array<TicketDetails> {}