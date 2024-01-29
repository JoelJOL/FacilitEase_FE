import { Component } from '@angular/core';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css'],
})
export class AssignRoleComponent {
  titles = ['Name', 'Date Of Birth', 'Gender', 'Email'];
  heading = 'Employee Details';
  empId: number = 0;
  GetId($event: number) {
    this.empId = $event;
  }
}
