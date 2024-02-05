import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoleService } from '@app/features/service/dataService/user-role.service';

@Component({
  selector: 'app-header-user-role-dropdown',
  templateUrl: './header-user-role-dropdown.component.html',
  styleUrls: ['./header-user-role-dropdown.component.css'],
})
export class HeaderUserRoleDropdownComponent implements OnInit {
  userRoles: string[] = [];
  selectedValue: string = '';

  constructor(
    public userRoleService: UserRoleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userRoles = this.userRoleService.getUserRoles();
  }

  sanitizeRoleValue(role: string): string {
    return role.toLowerCase().replace(/\s/g, '');
  }

  onOptionSelected(): void {
    this.userRoleService.setUserRole(this.selectedValue);
    if (this.selectedValue) {
      const sanitizedValue = this.sanitizeRoleValue(this.selectedValue);
      console.log('Selected Value:', sanitizedValue);
      this.router.navigate([sanitizedValue]);
    }
  }
}
