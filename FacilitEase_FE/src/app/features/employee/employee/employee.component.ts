import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';
import { UserRoleService } from '@app/features/service/dataService/user-role.service';

// Define the structure for each field in the sidebar
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
  // Initial user role set to 'Employee'
  userRole: string = 'Employee';

  // Sidebar fields with icons and titles
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/reports-icon.png',
      title: 'My Tickets',
      subfields: [],
    },
    {
      logo: 'assets/tickets-icon.png',
      title: 'Raise A Ticket',
      subfields: [],
    },
  ];

  showEmployeeTickets: boolean = false;
  isSidebarCollapsed: boolean = false;

  // Constructor with injected services
  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private userRoleService: UserRoleService
  ) {}

  ngOnInit() {
    // Set the initial user role and subscribe to sidebar state changes
    this.userRoleService.setUserRole(this.userRole);
    this.sidebarService.sidebarState$.subscribe((isCollapsed) => {
      this.isSidebarCollapsed = isCollapsed;
    });
  }

  // Handle a click event on a sidebar field
  onFieldClicked(clickedField: any) {
    console.log(`Handling click for ${clickedField.title}`);

    // Navigate to the corresponding route based on the clicked field
    if (clickedField.title === 'My Tickets') {
      this.showEmployeeTickets = true;
      this.router.navigate(['employee/my-tickets']);
      this.sidebarService.toggleCollapse();
    } else if (clickedField.title === 'Raise A Ticket') {
      this.showEmployeeTickets = true;
      this.router.navigate(['employee/form']);
      this.sidebarService.toggleCollapse();
    } else {
      this.showEmployeeTickets = false;
    }
  }

  onSubfieldClicked(event: { field: Field; subfield: string }) {}
}
