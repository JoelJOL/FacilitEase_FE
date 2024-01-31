import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '@app/features/service/dataService/sidebar.service';
import { UserRoleService } from '@app/features/service/dataService/user-role.service';
interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  userRole: string = 'Employee';
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/tickets-icon.png',
      title: 'Home',
      subfields: [],
    },
    {
      logo: 'assets/tickets-icon.png',
      title: 'Raise A Ticket',
      subfields: [],
    },
    {
      logo: 'assets/reports-icon.png',
      title: 'My Tickets',
      subfields: [],
    },
    { logo: 'assets/data-entry.png', title: 'Data Entry', subfields: [] },
  ];
  showEmployeeTickets: boolean = false;
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
    if (clickedField.title === 'Home') {
      this.showEmployeeTickets = true;
      this.router.navigate(['employee/employee-card']);
      this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
    } // Automatically collapse the sidebar
    else if (clickedField.title === 'employee/My Tickets') {
      this.showEmployeeTickets = true;
      this.router.navigate(['my-tickets']);
      this.sidebarService.toggleCollapse();
    } else if (clickedField.title === 'Raise A Ticket') {
      this.showEmployeeTickets = true;
      this.router.navigate(['employee/form']);
      this.sidebarService.toggleCollapse();
    } else {
      this.showEmployeeTickets = false;
    }
  }

  onSubfieldClicked(event: { field: Field; subfield: string }) {
    // if (event.field.title === 'Tickets') {
    //   if (event.subfield === 'Unassigned Tickets') {
    //     this.showEmployeeTickets = true;
    //     this.router.navigate(['unassigned-tickets']);
    //     this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
    //   } else if (event.subfield === 'Assigned Tickets') {
    //     this.showEmployeeTickets = true;
    //     this.router.navigate(['assigned-tickets']);
    //     this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
    //   } else if (event.subfield === 'Escalated Tickets') {
    //     this.showEmployeeTickets = true;
    //     this.router.navigate(['escalated-tickets']);
    //     this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
    //   }
    // }
  }
}
