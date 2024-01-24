import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-l2-report',
  templateUrl: './l2-report.component.html',
  styleUrls: ['./l2-report.component.css'],
})
export class L2ReportComponent {
  @Input()
  ticketStatus: number = 0;
}
