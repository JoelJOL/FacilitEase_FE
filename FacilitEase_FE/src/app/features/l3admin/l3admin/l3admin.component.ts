import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}
@Component({
  selector: 'app-l3admin',
  templateUrl: './l3admin.component.html',
  styleUrls: ['./l3admin.component.css']
})
export class L3adminComponent {
  constructor(private router: Router) {}
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/tickets-icon.png',
      title: 'Tickets',
      subfields: [
        'Raised Tickets',
        'Resolved Tickets',
        'Escalated Tickets',
      ],
    },
    {
      logo: 'assets/data-entry.png',
      title: 'Reports',
      subfields: [
        'Daily Reports',
         'Monthly Report',
          'Annual Reports'],
    },
    { logo: 'assets/reports-icon.png', title: 'Data Entry', subfields: [] },
  ];
  showL3AdminTickets: boolean = false;

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
        this.router.navigate(['view-ticket']);
      } else if (event.subfield === 'Resolved Tickets') {
        this.showL3AdminTickets = true;
        this.router.navigate(['resolved-tickets']);
      }
    } else if (event.subfield === 'Escalated Tickets') {
      console.log(`I have got the ${event.subfield} from ${event.field.title}`);
    }
  }
}
