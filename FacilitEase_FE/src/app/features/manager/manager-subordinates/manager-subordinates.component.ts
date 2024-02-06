import { Component, OnInit } from '@angular/core';
import { ManagerSubordinatesService } from '../../service/httpService/manager-subordinates.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from '@app/features/service/dataService/master.service';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';

@Component({
  selector: 'app-manager-subordinates',
  templateUrl: './manager-subordinates.component.html',
  styleUrls: ['./manager-subordinates.component.css'],
})
export class ManagerSubordinatesComponent implements OnInit {
  // employeeDetails: any; // Adjust the type accordingly

  // constructor(
  //   private managerSubordinatesService: ManagerSubordinatesService,
  //   private route: ActivatedRoute
  // ) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe((params) => {
  //     this.getEmployeeDetails();
  //   });
  // }

  // getEmployeeDetails() {
  //   this.managerSubordinatesService.getEmployeeDetails().subscribe(
  //     (data) => {
  //       this.employeeDetails = data;
  //       console.log(this.employeeDetails);
  //     },
  //     (error) => {
  //       console.error('Error fetching employee details:', error);
  //     }
  //   );
  // }
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
    this.apiLink = this.managerSubordinatesService.getEmployeeDetails();
  }
}
