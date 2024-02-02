import { Component } from '@angular/core';
import { SearchService } from '@app/features/service/httpService/searchService/search.service';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css'],
})
export class AssignRoleComponent {
  constructor(private searchService: SearchService) {
    searchService: SearchService;
  }
  titles = ['Name', 'Date Of Birth', 'Gender', 'Email', 'Roles'];
  heading = 'Employee Details';
  empId: number = 0;
  primary = 'primary';
  option: string = '';
  apiRole = this.searchService.assignRolesApi;

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
}
