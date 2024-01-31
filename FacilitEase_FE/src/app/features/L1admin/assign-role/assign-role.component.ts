import { Component } from '@angular/core';
import { SearchService } from '@app/features/service/httpService/searchService/search.service';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css'],
})
export class AssignRoleComponent {
  constructor(private searchService: SearchService) {}
  titles = ['Name', 'Date Of Birth', 'Gender', 'Email'];
  heading = 'Employee Details';
  empId: number = 0;
  primary = 'primary';
  option: string = '';

  apiRole = 'https://localhost:7049/api/RoleAssignment';
  GetId($event: number) {
    this.empId = $event;
  }
  AssignRole() {
    if (this.empId > 0 && this.option) {
      this.searchService
        .AssignRole(this.empId, this.option)
        .subscribe((data) => {
          console.log(data);
          console.log('hii');
        });
    }
  }
  GetOption(option: string) {
    this.option = option;
  }
  closeDropdown() {}
}
