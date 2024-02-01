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
  selector: 'app-l3admin',
  templateUrl: './l3admin.component.html',
  styleUrls: ['./l3admin.component.css'],
})
export class L3adminComponent {
  userRole: string = 'L3 Admin';
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/tickets-icon.png',
      title: 'Tickets',
      subfields: ['Raised Tickets', 'Resolved Tickets', 'Escalated Tickets'],
    },
    {
      logo: 'assets/data-entry.png',
      title: 'Reports',
      subfields: ['Daily Reports', 'Monthly Report', 'Annual Reports'],
    },
    { logo: 'assets/reports-icon.png', title: 'Data Entry', subfields: [] },
  ];
  showL3AdminTickets: boolean = false;
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
      this.showL3AdminTickets = true;
      this.router.navigate(['manager-subordinates']);
    } else if (clickedField.title === 'Waiting For Approval') {
      this.showL3AdminTickets = true;
      console.log('Waiting For Approval #100');
    } else {
      this.showL3AdminTickets = false;
    }
  }
  onSubfieldClicked(event: { field: Field; subfield: string }) {
    if (event.field.title === 'Tickets') {
      if (event.subfield === 'Raised Tickets') {
        this.showL3AdminTickets = true;
        this.router.navigate(['l3/view-ticket']);
      } else if (event.subfield === 'Resolved Tickets') {
        this.showL3AdminTickets = true;
        this.router.navigate(['l3/resolved-tickets']);
      } 
    } else if (event.subfield === 'On Hold Tickets') {
      this.showL3AdminTickets = true;
      this.router.navigate(['l3/on-hold-tickets']);
    }
  }
}
