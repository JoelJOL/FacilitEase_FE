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
  showDropdown: boolean = false;
  selectedOption: string = '';
  onOptionSelected(): void {
    if (this.selectedValue) {
    }
  }

  ngOnInit() {
    this.userRoleService.userRole$.subscribe((userRole) => {
      this.userRole = userRole;
      this.selectedValue = userRole.toLowerCase();
    });
  }
  closeDropdown() {
    this.showDropdown = false;
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  selectOption(option: string) {
    this.selectedOption = option;
    this.selectedValue = option;
    this.showDropdown = false;
    this.router.navigate([this.selectedValue]);
  }
}
