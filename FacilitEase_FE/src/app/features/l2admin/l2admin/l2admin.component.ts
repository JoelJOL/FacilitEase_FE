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
    },
    { logo: 'assets/data-entry.png', title: 'Data Entry', subfields: [] },
  ];
  showL2AdminTickets: boolean = false;
  isSidebarCollapsed: boolean = false;

  constructor(private router: Router, private sidebarService: SidebarService) {}
  ngOnInit() {
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
      this.router.navigate(['l2report/2']);
    } else {
      this.showL2AdminTickets = false;
    }
  }

  onSubfieldClicked(event: { field: Field; subfield: string }) {
    if (event.field.title === 'Tickets') {
      if (event.subfield === 'Unassigned Tickets') {
        this.showL2AdminTickets = true;
        this.router.navigate(['unassigned-tickets']);
      } else if (event.subfield === 'Assigned Tickets') {
        this.showL2AdminTickets = true;
        this.router.navigate(['assigned-tickets']);
      } else if (event.subfield === 'Escalated Tickets') {
        this.showL2AdminTickets = true;
        this.router.navigate(['escalated-tickets']);
      }
    }
  }
}
