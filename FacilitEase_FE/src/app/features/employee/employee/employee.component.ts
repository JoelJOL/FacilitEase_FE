import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';
import { UserRoleService } from '@app/features/service/dataService/user-role.service';
import { NotificationService } from '@app/features/service/httpService/NotificationService/notification.service';
import { SharedService } from '@app/features/service/httpService/SharedService/shared.service';
import { ToastrService } from 'ngx-toastr';
interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  userRole: string = 'Employee';
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/reports-icon.png',
      title: 'My Tickets',
      subfields: [],
    },
    {
      logo: 'assets/tickets-icon.png',
      title: 'Raise A Ticket',
      subfields: [],
    },
  ];
  showEmployeeTickets: boolean = false;
  isSidebarCollapsed: boolean = false;

  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private userRoleService: UserRoleService,
    private sharedService: SharedService,
    private notificationService: NotificationService,
    private azureService: AzureService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.userRoleService.setUserRole(this.userRole);
    this.sidebarService.sidebarState$.subscribe((isCollapsed) => {
      this.isSidebarCollapsed = isCollapsed;
      // Optionally, you can set showL2AdminTickets based on isCollapsed state
      // this.showL2AdminTickets = !isCollapsed; // Example, adjust as needed
    });
    //Notification
    this.notificationService.startConnection();

    this.sharedService.notification$.subscribe((data) => {
      if (data.userId == this.azureService.userId) {
        console.log('Notification received: ' + data.text);
        this.toastr.info(data.text);
      }
    });
  }
  onFieldClicked(clickedField: any) {
    console.log(`Handling in App Component for ${clickedField.title}`);
    if (clickedField.title === 'Home') {
      this.showEmployeeTickets = true;
      this.router.navigate(['employee/employeecard']);
      this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
    } // Automatically collapse the sidebar
    else if (clickedField.title === 'My Tickets') {
      this.showEmployeeTickets = true;
      this.router.navigate(['employee/my-tickets']);
      this.sidebarService.toggleCollapse();
    } else if (clickedField.title === 'Raise A Ticket') {
      this.showEmployeeTickets = true;
      this.router.navigate(['employee/form']);
      this.sidebarService.toggleCollapse();
    } else {
      this.showEmployeeTickets = false;
    }
  }

  onSubfieldClicked(event: { field: Field; subfield: string }) {
    // if (event.field.title === 'Tickets') {
    //   if (event.subfield === 'Unassigned Tickets') {
    //     this.showEmployeeTickets = true;
    //     this.router.navigate(['unassigned-tickets']);
    //     this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
    //   } else if (event.subfield === 'Assigned Tickets') {
    //     this.showEmployeeTickets = true;
    //     this.router.navigate(['assigned-tickets']);
    //     this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
    //   } else if (event.subfield === 'Escalated Tickets') {
    //     this.showEmployeeTickets = true;
    //     this.router.navigate(['escalated-tickets']);
    //     this.sidebarService.toggleCollapse(); // Automatically collapse the sidebar
    //   }
    // }
  }
}
