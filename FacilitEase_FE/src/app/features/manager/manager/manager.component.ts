import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { SidebarService } from '@app/features/service/dataService/sidebarService/sidebar.service';
import { NotificationService } from '@app/features/service/httpService/NotificationService/notification.service';
import { SharedService } from '@app/features/service/httpService/SharedService/shared.service';
import { ToastrService } from 'ngx-toastr';
import { UserRoleService } from '@app/features/service/dataService/userRoleService/user-role.service';
import {
  ActiveTickets,
  ApprovalPendingTickets,
  EmployeeTickets,
  Manager,
} from 'environments/environment';
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
  userRole: string = 'Manager';
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/hourglass-start-solid.svg',
      title: 'Waiting for Approval',
    },
    {
      logo: 'assets/ticket-solid.svg',
      title: 'Employee Tickets',
      subfields: ['Live Tickets', 'All Tickets'],
    },
  ];
  showManagerTickets: boolean = false;
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

    //notification
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
    if (clickedField.title === 'Employee Tickets') {
      this.showManagerTickets = true;
    } else if (clickedField.title === 'Waiting for Approval') {
      this.showManagerTickets = true;
      this.router.navigate([`${Manager}/${ApprovalPendingTickets}`]);
    } else {
      this.showManagerTickets = false;
    }
  }
  onSubfieldClicked(event: { field: Field; subfield: string }) {
    if (event.field.title === 'Employee Tickets') {
      if (event.subfield === 'Live Tickets') {
        this.showManagerTickets = true;
        this.router.navigate([`${Manager}/${ActiveTickets}`]);
      } else if (event.subfield === 'All Tickets') {
        this.showManagerTickets = true;
        this.router.navigate([`${Manager}/${EmployeeTickets}`]);
      }
    }
  }
}
