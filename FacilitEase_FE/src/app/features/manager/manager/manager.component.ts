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
  // handleButtonClick(): void {
  //   console.log('Button clicked!');
  //   // Add your logic for button click here
  // }
  // constructor(private sidebarService: SidebarService) {}

  onFieldClicked(clickedField: any) {
    // You can implement specific logic in the app.component as well
    console.log(`Handling in App Component for ${clickedField.title}`);
    if (clickedField.title === 'My Team') {
      this.showManagerSubordinates = true;
      this.router.navigate(['manager-subordinates']);
    } else {
      // Reset the flag and navigate to the corresponding route for other fields
      this.showManagerSubordinates = false;
    }
  }
}
