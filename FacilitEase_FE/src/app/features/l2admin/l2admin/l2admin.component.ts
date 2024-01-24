// l2admin.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '@app/features/service/dataService/sidebar.service';

interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}

@Component({
  selector: 'app-l2admin',
  templateUrl: './l2admin.component.html',
  styleUrls: ['./l2admin.component.css'],
})
export class L2AdminComponent {
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/tickets-icon.png',
      title: 'Tickets',
      subfields: [
        'Unassigned Tickets',
        'Assigned Tickets',
        'Escalated Tickets',
      ],
    },
    {
      logo: 'assets/reports-icon.png',
      title: 'Reports',
      subfields: ['Daily Reports', 'Monthly Report', 'Annual Reports'],
    },
    { logo: 'assets/data-entry.png', title: 'Data Entry', subfields: [] },
  ];
  showL2AdminTickets: boolean = false;

  constructor(private router: Router, private sidebarService: SidebarService) {}

  onFieldClicked(clickedField: any) {
    console.log(`Handling in App Component for ${clickedField.title}`);
    if (clickedField.title === 'My Team') {
      this.showL2AdminTickets = true;
      this.router.navigate(['manager-subordinates']);
      this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
    } // Automatically collapse the sidebar
    else {
      this.showL2AdminTickets = false;
    }
  }

  onSubfieldClicked(event: { field: Field; subfield: string }) {
    if (event.field.title === 'Tickets') {
      if (event.subfield === 'Unassigned Tickets') {
        this.showL2AdminTickets = true;
        this.router.navigate(['unassigned-tickets']);
        this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
      } else if (event.subfield === 'Assigned Tickets') {
        this.showL2AdminTickets = true;
        this.router.navigate(['assigned-tickets']);
        this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
      } else if (event.subfield === 'Escalated Tickets') {
        this.showL2AdminTickets = true;
        this.router.navigate(['escalated-tickets']);
        this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
      }
    }
  }
}
