import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';
import { UserRoleService } from '@app/features/service/dataService/userRoleService/user-role.service';

// Interface to define the structure of each field
interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}
@Component({
  selector: 'app-l3admin',
  templateUrl: './l3admin.component.html',
  styleUrls: ['./l3admin.component.css'],
})
export class L3adminComponent {
  userRole: string = 'L3 Admin'; // User role, defaulting to 'L3 Admin'
  yourFieldsArray: Field[] = [
    // Array containing fields for the sidebar
    {
      logo: 'assets/tickets-icon.png',
      title: 'Tickets',
      subfields: [
        'Raised Tickets',
        'Tickets On Hold',
        'Cancellation Requests',
        'Closed Tickets',
      ],
    },
    {
      logo: 'assets/data-entry.png',
      title: 'Reports',
    },
  ];
  showL3AdminTickets: boolean = false; // Flag to control whether to display L3 Admin tickets
  isSidebarCollapsed: boolean = false; // Flag to track sidebar collapse state

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private userRoleService: UserRoleService
  ) {}
  ngOnInit() {
    // Set the user role and subscribe to sidebar collapse state changes
    this.userRoleService.setUserRole(this.userRole);
    this.sidebarService.sidebarState$.subscribe((isCollapsed) => {
      this.isSidebarCollapsed = isCollapsed;
    });
  }

  // Method to handle clicks on fields
  onFieldClicked(clickedField: any) {
    console.log(`Handling in App Component for ${clickedField.title}`);
    if (clickedField.title === 'Tickets') {
      this.showL3AdminTickets = true;
      this.router.navigate(['l3admin/view-ticket']);
    } else if (clickedField.title === 'Reports') {
      this.showL3AdminTickets = true;
      this.router.navigate(['l3admin/l3report']);
    } else {
      this.showL3AdminTickets = false;
    }
  }

  // Method to handle clicks on subfields
  onSubfieldClicked(event: { field: Field; subfield: string }) {
    if (event.field.title === 'Tickets') {
      // Route to different ticket-related pages based on the clicked subfield
      if (event.subfield === 'Raised Tickets') {
        this.showL3AdminTickets = true;
        this.router.navigate(['l3admin/view-ticket']);
      } else if (event.subfield === 'Closed Tickets') {
        this.showL3AdminTickets = true;
        this.router.navigate(['l3admin/resolved-tickets']);
      } else if (event.subfield === 'Tickets On Hold') {
        this.showL3AdminTickets = true;
        this.router.navigate(['l3admin/on-hold-tickets']);
      } else if (event.subfield === 'Cancellation Requests') {
        this.showL3AdminTickets = true;
        this.router.navigate(['l3admin/cancel-requests']);
      }
    } else if (event.subfield === 'Escalated Tickets') {
      this.showL3AdminTickets = true;
      this.router.navigate(['l3admin/escalated-tickets']);
    }
  }
}
