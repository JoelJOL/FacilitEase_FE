import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '@app/features/service/reportService/report.service';

@Component({
  selector: 'app-report-porfile',
  templateUrl: './report-porfile.component.html',
  styleUrls: ['./report-porfile.component.css'],
})
export class ReportPorfileComponent {
  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService
  ) {}
  name: string = '';
  jobTItle: string = '';
  userName: string = '';
  id: number = 0;
  data: string[] = [];
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.reportService.GetProfileData(this.id).subscribe(
      (data) => {
        console.log(data);
        this.name = data.employeeFirstName + data.employeeLastName;
        this.jobTItle = data.jobTitle;
        this.userName = data.username;
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
