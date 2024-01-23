import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FaciltEase_FE';
  // fields: Field[] = [
  //   { logo: 'assets/tickets-icon.png', title: 'Employee Tickets' },
  //   { logo: 'assets/ticket-approval.png', title: 'Waiting For Approval' },

  //   // Add more fields as needed
  // ];
  // yourFieldsArray: Field[] = [
  //   {
  //     logo: 'assets/tickets-icon.png',
  //     title: 'Employee Tickets',
  //     subfields: ['Tickets', 'Resolved'],
  //   },
  //   { logo: 'assets/ticket-approval.png', title: 'Waiting For Approval' },
  // ];
  // constructor(private router: Router) {}
  // // handleButtonClick(): void {
  // //   console.log('Button clicked!');
  // //   // Add your logic for button click here
  // // }
  // // constructor(private sidebarService: SidebarService) {}

  // onFieldClicked(clickedField: any) {
  //   // You can implement specific logic in the app.component as well
  //   console.log(`Handling in App Component for ${clickedField.title}`);
  //   if (clickedField.title === 'My Team') {
  //     this.router.navigate(['manager-subordinates']);
  //   }
  // }
}
