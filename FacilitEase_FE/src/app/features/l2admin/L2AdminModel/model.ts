export interface WeekReport {
  dailyTickets: number;
  dailyResolved: number;
  dailyUnresolved: number;
  dailyEscalated: number;
  weeklyTickets: number;
  weeklyResolved: number;
  weeklyUnresolved: number;
  weeklyEscalated: number;
}
export interface profileData {
  empId: number;
  employeeFirstName: string;
  employeeLastName: string;
  jobTitle: string;
  username: string;
}
export interface CategoryDataRecieve {
  [key: string]: {
    resolvedCount: number;
    unresolvedCount: number;
    escalatedCount: number;
  };
}
export interface CategoryReportDataRecieve {
  january: CategoryReportMonthData[];
  february: CategoryReportMonthData[];
  march: CategoryReportMonthData[];
  april: CategoryReportMonthData[];
  may: CategoryReportMonthData[];
  june: CategoryReportMonthData[];
  july: CategoryReportMonthData[];
  august: CategoryReportMonthData[];
  september: CategoryReportMonthData[];
  october: CategoryReportMonthData[];
  november: CategoryReportMonthData[];
  december: CategoryReportMonthData[];
}
export interface CategoryReportData {
  [key: string]: CategoryReportMonthData[];
}

export interface CategoryReportMonthData {
  categoryName: string;
  resolvedCount: number;
  unresolvedCount: number;
  escalatedCount: number;
}
