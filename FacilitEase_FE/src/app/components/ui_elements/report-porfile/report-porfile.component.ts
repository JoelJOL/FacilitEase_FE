import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '@app/features/service/httpService/reportService/report.service';
import { profileData } from '@app/features/l2admin/L2AdminModel/model';
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
  empid: number = 0;
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
        this.empid = data.empId;
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
