import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';
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
  showDepartmentHeadTickets: boolean = false;
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
      this.showDepartmentHeadTickets = true;
      this.router.navigate(['l2admin-subordinates']);
    } else if (clickedField.title === 'Reports') {
      this.showDepartmentHeadTickets = true;
      this.router.navigate(['l2report/:id']);
    } else {
      this.showDepartmentHeadTickets = false;
    }
  }

  onSubfieldClicked(event: { field: Field; subfield: string }) {
    if (event.field.title === 'Tickets') {
      if (event.subfield === 'Unassigned Tickets') {
        this.showDepartmentHeadTickets = true;
        this.router.navigate(['unassigned-tickets']);
      } else if (event.subfield === 'Assigned Tickets') {
        this.showDepartmentHeadTickets = true;
        this.router.navigate(['departmentHead-tickets']);
      } else if (event.subfield === 'Escalated Tickets') {
        this.showDepartmentHeadTickets = true;
        this.router.navigate(['employee-card']);
      }
    }
  }
}
