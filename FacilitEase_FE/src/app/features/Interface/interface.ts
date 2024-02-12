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

export interface TicketAttachment {
  documentLink: string;
}

export interface AssetDetails {
  id: number;
  assetName: string;
  warrantyInfo: string;
  lastMaintenanceDate: Date;
  nextMaintenanceDate: Date;
  assetType: string;
  purchaseDate: Date;
}

export interface AssetHistory {
  id: number;
  assignedToEmployeeName: string;
  fromDate: Date;
  toDate: Date;
}

export interface TicketResponse {
  id: number;
  ticketName: string;
  ticketDescription: string;
  priorityId: number;
  categoryId: number;
  departmentId: number;
  documentLink: string;
  submittedDate: Date;
}
// Asset.interface.ts
export interface Asset {
  assetId: number;
  assetName: string;
  warrantyInfo: string;
  lastMaintenanceDate: Date;
  nextMaintenanceDate: Date;
  assetType: string; // Update this based on the actual type in your API response
}
