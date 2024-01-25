import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '@app/features/service/dataService/sidebar.service';
interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/tickets-icon.png',
      title: 'Raise A Ticket',
      subfields: [
      ],
    },
    {
      logo: 'assets/reports-icon.png',
      title: 'Reports',
      subfields: ['Daily Reports', 'Monthly Report', 'Annual Reports'],
    },
    { logo: 'assets/data-entry.png', title: 'Data Entry', subfields: [] },
  ];
  showEmployeeTickets: boolean = false;

  constructor(private router: Router, private sidebarService: SidebarService) {}

  onFieldClicked(clickedField: any) {
    console.log(`Handling in App Component for ${clickedField.title}`);
    if (clickedField.title === 'My Team') {
      this.showEmployeeTickets = true;
      this.router.navigate(['manager-subordinates']);
      this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
    } // Automatically collapse the sidebar
    else if(clickedField.title==="Raise A Ticket"){
      this.showEmployeeTickets = true;
      this.router.navigate(['form']);
      this.sidebarService.toggleCollapse(); 
    }
    else {
      this.showEmployeeTickets = false;
    }
  }

  onSubfieldClicked(event: { field: Field; subfield: string }) {
    if (event.field.title === 'Tickets') {
      if (event.subfield === 'Unassigned Tickets') {
        this.showEmployeeTickets = true;
        this.router.navigate(['unassigned-tickets']);
        this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
      } else if (event.subfield === 'Assigned Tickets') {
        this.showEmployeeTickets = true;
        this.router.navigate(['assigned-tickets']);
        this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
      } else if (event.subfield === 'Escalated Tickets') {
        this.showEmployeeTickets = true;
        this.router.navigate(['escalated-tickets']);
        this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
      }
    }
  }
}
