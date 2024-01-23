import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent {
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/tickets-icon.png',
      title: 'Employee Tickets',
      subfields: ['Tickets', 'Resolved'],
    },
    { logo: 'assets/ticket-approval.png', title: 'Waiting For Approval' },
  ];
  showManagerSubordinates: boolean = false;
  constructor(private router: Router) {}

  onFieldClicked(clickedField: any) {
    console.log(`Handling in App Component for ${clickedField.title}`);
    if (clickedField.title === 'My Team') {
      this.showManagerSubordinates = true;
      this.router.navigate(['manager-subordinates']);
    } else if (clickedField.title === 'Waiting For Approval') {
      this.showManagerSubordinates = true;
      console.log('Waiting For Approval #100');
    } else {
      this.showManagerSubordinates = false;
    }
  }
  onSubfieldClicked(event: { field: Field; subfield: string }) {
    if (event.field.title === 'Employee Tickets') {
      if (event.subfield === 'Tickets') {
        console.log(
          `I have got the ${event.subfield} from ${event.field.title}`
        );
      } else if (event.subfield === 'Resolved') {
        console.log(
          `I have got the ${event.subfield} from ${event.field.title}`
        );
      }
    }
  }
}
