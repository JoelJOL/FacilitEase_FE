import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/masterService/master.service';
import { ManagerSubordinatesService } from '@app/features/service/httpService/managerSubordinateService/manager-subordinates.service';

@Component({
  selector: 'app-myteam-employee',
  templateUrl: './myteam-employee.component.html',
  styleUrls: ['./myteam-employee.component.css'],
})
export class MyteamEmployeeComponent {
  headers: string[] = [
    'Employee Code',
    'Name',
    'DOB',
    'Email',
    'Gender',
    'Department',
    'Position',
    'Location',
  ];
  apiLink: string = '';

  constructor(
    private masterService: MasterService,
    private router: Router,
    private managerSubordinatesService: ManagerSubordinatesService
  ) {}

  ngOnInit(): void {
    this.apiLink = this.masterService.getApiLinkProjectEmployeeDetails();
  }
}
