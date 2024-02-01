import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';
import { UserRoleService } from '@app/features/service/dataService/user-role.service';
interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}
@Component({
  selector: 'app-departmenthead',
  templateUrl: './departmenthead.component.html',
  styleUrls: ['./departmenthead.component.css'],
})
export class DepartmentheadComponent {
  userRole: string = 'Department Head ';

  yourFieldsArray: Field[] = [
    {
      logo: 'assets/tickets-icon.png',
      title: 'Tickets',
      subfields: ['Waiting For Approval'],
    },
    {
      logo: 'assets/tickets-icon.png',
      title: 'Data Entry',
      subfields: ['Add Employee', 'Reactive Form', 'Bulk Upload'],
    },
  ];
  showDepartmentHeadTickets: boolean = false;
  isSidebarCollapsed: boolean = false;

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private userRoleService: UserRoleService
  ) {}
  ngOnInit() {
    this.userRoleService.setUserRole(this.userRole);
    this.sidebarService.sidebarState$.subscribe((isCollapsed) => {
      this.isSidebarCollapsed = isCollapsed;
      // Optionally, you can set showL2AdminTickets based on isCollapsed state
      // this.showL2AdminTickets = !isCollapsed; // Example, adjust as needed
    });
  }
  onFieldClicked(clickedField: any) {
    console.log(`Handling in App Component for ${clickedField.title}`);
    if (clickedField.title === 'My Team') {
      this.showDepartmentHeadTickets = true;
      this.router.navigate(['l2admin-subordinates']);
    } else {
      this.showDepartmentHeadTickets = false;
    }
  }

  onSubfieldClicked(event: { field: Field; subfield: string }) {
    if (event.field.title === 'Tickets') {
      if (event.subfield === 'Waiting For Approval') {
        this.showDepartmentHeadTickets = true;
        this.router.navigate(['departmenthead/departmentHead-tickets']);
      } else if (event.subfield === 'Waiting For Approval') {
        this.showDepartmentHeadTickets = true;
        this.router.navigate(['departmenthead/departmentHead-tickets']);
      }
    } else if (event.field.title === 'Data Entry') {
      if (event.subfield === 'Add Employee') {
        this.showDepartmentHeadTickets = true;
        this.router.navigate(['departmenthead/add-employee']);
      } else if (event.subfield === 'Reactive Form') {
        this.showDepartmentHeadTickets = true;
        this.router.navigate(['departmenthead/reactive-form']);
      } else if (event.subfield === 'Bulk Upload') {
        this.showDepartmentHeadTickets = true;
        this.router.navigate(['departmenthead/file-upload']);
      }
    }
  }
}
