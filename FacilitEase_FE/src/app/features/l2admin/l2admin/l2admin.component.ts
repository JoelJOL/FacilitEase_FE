// unassigned-tickets.component.ts
import { Component, OnInit } from '@angular/core';
import { DropDownService } from '@app/features/service/httpService/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}
// Update the path

@Component({
  selector: 'app-l2admin',
  templateUrl: './l2admin.component.html',
  styleUrls: ['./l2admin.component.css'],
})
export class L2AdminComponent {
  constructor(private router: Router) {}
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
      logo: 'assets/data-entry.png',
      title: 'Reports',
      subfields: ['Daily Reports', 'Monthly Report', 'Annual Reports'],
    },
    { logo: 'assets/reports-icon.png', title: 'Data Entry', subfields: [] },
  ];
  showL2AdminTickets: boolean = false;

  onFieldClicked(clickedField: any) {
    console.log(`Handling in App Component for ${clickedField.title}`);
    if (clickedField.title === 'My Team') {
      this.showL2AdminTickets = true;
      this.router.navigate(['manager-subordinates']);
    } else if (clickedField.title === 'Waiting For Approval') {
      this.showL2AdminTickets = true;
      console.log('Waiting For Approval #100');
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
      }
    } else if (event.subfield === 'Escalated Tickets') {
      console.log(`I have got the ${event.subfield} from ${event.field.title}`);
    }
  }
}
