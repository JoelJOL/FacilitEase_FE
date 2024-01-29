import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '@app/features/service/dataService/sidebar.service';

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
      subfields: ['Form Entry', 'Assign Role'],
    },
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
      this.router.navigate(['l2report/:id']);
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
    if (event.field.title === 'Data Entry') {
      if (event.subfield === 'Form Entry') {
        this.showL2AdminTickets = true;
        this.router.navigate(['search']);
      }
      if (event.subfield === 'Assign Role') {
        this.showL2AdminTickets = true;
        this.router.navigate(['entries']);
      }
    }
  }
}
