export interface Priority {
  id: number;
  priorityName: string;
}

export interface Department {
  id: number;
  deptName: string;
}

export interface Category {
  id: number;
  categoryName: string;
}

export interface TicketResponse {
  ticketName: string;
  ticketDescription: string;
  priorityId: number;
  categoryId: number;
  departmentId: number;
  documentLink: string;
}
