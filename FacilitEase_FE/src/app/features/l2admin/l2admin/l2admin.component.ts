// l2admin.component.ts
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
  selector: 'app-l2admin',
  templateUrl: './l2admin.component.html',
  styleUrls: ['./l2admin.component.css'],
})
export class L2AdminComponent {
  userRole: string = 'L2 Admin';
  yourFieldsArray: Field[] = [
    {
      logo: 'assets/tickets-icon.png',
      title: 'Tickets',
      subfields: [
        'Unassigned Tickets',
        'Assigned Tickets',
        'Escalated Tickets',
        'Tickets To Resolve',
        'Cancellation Requests',
      ],
    },
    {
      logo: 'assets/reports-icon.png',
      title: 'Reports',
    },
    // { logo: 'assets/data-entry.png', title: 'Data Entry', subfields: [] },
  ];
  showL2AdminTickets: boolean = false;
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
    if (clickedField.title === 'Tickets') {
      this.showL2AdminTickets = true;
      this.router.navigate(['l2admin/unassigned-tickets']);
    } else if (clickedField.title === 'Reports') {
      this.showL2AdminTickets = true;
      this.router.navigate(['l2admin/l2report']);
    } else if (clickedField.title === 'Data Entry') {
      this.showL2AdminTickets = true;
      this.router.navigate(['l2admin/add-employee']);
    } else {
      this.showL2AdminTickets = false;
    }
  }

  onSubfieldClicked(event: { field: Field; subfield: string }) {
    if (event.field.title === 'Tickets') {
      if (event.subfield === 'Unassigned Tickets') {
        this.showL2AdminTickets = true;
        this.router.navigate(['l2admin/unassigned-tickets']);
      } else if (event.subfield === 'Assigned Tickets') {
        this.showL2AdminTickets = true;
        this.router.navigate(['l2admin/assigned-tickets']);
      } else if (event.subfield === 'Escalated Tickets') {
        this.showL2AdminTickets = true;
        this.router.navigate(['l2admin/escalated-tickets']);
      } else if (event.subfield === 'Tickets To Resolve') {
        this.showL2AdminTickets = true;
        this.router.navigate(['l2admin/tickets-to-resolve']);
      } else if (event.subfield === 'Cancellation Requests') {
        this.showL2AdminTickets = true;
        this.router.navigate(['l2admin/l2-cancellation']);
      }
    }
  }
}
