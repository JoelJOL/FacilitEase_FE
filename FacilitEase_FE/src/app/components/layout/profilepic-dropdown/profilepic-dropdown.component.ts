import { Component, OnInit } from '@angular/core';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { UserRoleService } from '@app/features/service/dataService/userRoleService/user-role.service';

@Component({
  selector: 'app-profilepic-dropdown',
  templateUrl: './profilepic-dropdown.component.html',
  styleUrls: ['./profilepic-dropdown.component.css'],
})
export class ProfilepicDropdownComponent implements OnInit {
  userRole: string = '';
  userName: string = '';

  constructor(
    private azureService: AzureService,
    private userRoleService: UserRoleService
  ) {}

  ngOnInit() {
    this.userName = this.azureService.userName;
    this.userRole = this.userRoleService.getUserRole();
  }

  Logout() {
    this.azureService.Logout();
  }
}
