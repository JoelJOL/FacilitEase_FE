import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '@app/features/service/reportService/report.service';
@Component({
  selector: 'app-admin-performance',
  templateUrl: './admin-performance.component.html',
  styleUrls: ['./admin-performance.component.css'],
})
export class AdminPerformanceComponent {
  selectedDivIndex: number | null = null;
  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ChangeClass(indexOfDiv: number): void {
    // Toggle the selectedDivIndex when a div is clicked
    this.selectedDivIndex =
      this.selectedDivIndex === indexOfDiv ? null : indexOfDiv;
  }
  items = ['Assigned', 'Resolved', 'Unresolved', 'Escalated'];
  data: number[] = [];
  id: number = 0;
  condition = true;
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    console.log('ID:', this.id);
    this.reportService.GetReportData(this.id).subscribe(
      (data) => {
        console.log(data);
        this.data.push(data.total);
        this.data.push(data.resolved);
        this.data.push(data.unresolved);
        this.data.push(data.escalated);
      },
      (error: Error) => {
        alert('Error has occured :' + error.message);
      },
      () => {
        console.log('request completed');
      }
    );
  }
}
