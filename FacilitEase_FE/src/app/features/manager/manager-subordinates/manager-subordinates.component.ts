import { Component, OnInit } from '@angular/core';
import { ManagerSubordinatesService } from '../../service/httpService/manager-subordinates.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-subordinates',
  templateUrl: './manager-subordinates.component.html',
  styleUrls: ['./manager-subordinates.component.css'],
})
export class ManagerSubordinatesComponent implements OnInit {
  employeeDetails: any; // Adjust the type accordingly

  constructor(
    private managerSubordinatesService: ManagerSubordinatesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getEmployeeDetails();
    });
  }

  getEmployeeDetails() {
    this.managerSubordinatesService.getEmployeeDetails().subscribe(
      (data) => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
      },
      (error) => {
        console.error('Error fetching employee details:', error);
      }
    );
  }
}
