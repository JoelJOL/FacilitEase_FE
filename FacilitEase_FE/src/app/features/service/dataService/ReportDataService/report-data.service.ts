import { ElementRef, Injectable } from '@angular/core';
import { WeekReport } from '@app/features/l2admin/L2AdminModel/model';

@Injectable({
  providedIn: 'root',
})
export class ReportDataService {
  constructor() {}
  weekReport: WeekReport = {
    dailyTickets: 0,
    dailyResolved: 0,
    dailyUnresolved: 0,
    dailyEscalated: 0,
    weeklyTickets: 0,
    weeklyResolved: 0,
    weeklyUnresolved: 0,
    weeklyEscalated: 0,
  };
  resolvedLegend!: HTMLElement;
  escalatedLegend!: HTMLElement;
}
