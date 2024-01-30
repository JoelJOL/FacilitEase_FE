import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '@app/features/service/dataService/sidebar.service';
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
    },
    {
      logo: 'assets/reports-icon.png',
      title: 'Waiting Tickets',
    },
  ];
  showManagerTickets: boolean = false;
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
      this.showManagerTickets = true;
      this.router.navigate(['manager-subordinates']);
    } else if (clickedField.title === 'Employee Tickets') {
      this.showManagerTickets = true;
      this.router.navigate(['manager-view-employee-tickets']);
    } else if (clickedField.title === 'Waiting Tickets') {
      this.showManagerTickets = true;
      this.router.navigate(['manager-view-waiting-tickets']);
    }else {
      this.showManagerTickets = false;
    }
  }
}
