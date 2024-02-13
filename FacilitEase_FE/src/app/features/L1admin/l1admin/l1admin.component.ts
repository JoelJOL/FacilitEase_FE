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
  selector: 'app-l1admin',
  templateUrl: './l1admin.component.html',
  styleUrls: ['./l1admin.component.css'],
})
export class L1adminComponent {
  userRole: string = 'L1 Admin';
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/tickets-icon.png',
      title: 'Tickets',
      subfields: ['Escalated Tickets', 'All Tickets'],
    },
    {
      logo: 'assets/reports-icon.png',
      title: 'Reports',
    },
    {
      logo: 'assets/data-entry.png',
      title: 'Data Entry',
      subfields: ['Assign Role'],
    },
  ];
  showL2AdminTickets: boolean = false;
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
      this.showL2AdminTickets = true;
      this.router.navigate(['l2admin-subordinates']);
    } else if (clickedField.title === 'Reports') {
      this.showL2AdminTickets = true;
      this.router.navigate(['l2report/:id']);
    } else {
      this.showL2AdminTickets = false;
    }
  }

  onSubfieldClicked(event: { field: Field; subfield: string }) {
    if (event.field.title === 'Tickets') {
      if (event.subfield === 'All Tickets') {
        this.showL2AdminTickets = true;
        this.router.navigate(['l1admin/view-all-tickets']);
      }
    } else if (event.subfield === 'Escalated Tickets') {
      this.showL2AdminTickets = true;
      this.router.navigate(['l1admin/escalated-tickets']);
    }

    if (event.field.title === 'Data Entry') {
      if (event.subfield === 'Form Entry') {
        this.showL2AdminTickets = true;
        this.router.navigate(['search']);
      }
      if (event.subfield === 'Assign Role') {
        this.showL2AdminTickets = true;
        this.router.navigate(['l1admin/entries']);
      }
    }
  }
}
