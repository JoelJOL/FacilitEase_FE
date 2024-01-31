import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoleService } from '@app/features/service/dataService/user-role.service';

@Component({
  selector: 'app-header-user-role-dropdown',
  templateUrl: './header-user-role-dropdown.component.html',
  styleUrls: ['./header-user-role-dropdown.component.css'],
})
export class HeaderUserRoleDropdownComponent implements OnInit {
  @Input() userRole: string = '';
  selectedValue: string = 'employee';

  constructor(
    private router: Router,
    private userRoleService: UserRoleService
  ) {}

  onOptionSelected(): void {
    if (this.selectedValue) {
      this.router.navigate([this.selectedValue]);
    }
  }

  ngOnInit() {
    this.userRoleService.userRole$.subscribe((userRole) => {
      this.userRole = userRole;
      this.selectedValue = userRole.toLowerCase();
    });
  }
}
