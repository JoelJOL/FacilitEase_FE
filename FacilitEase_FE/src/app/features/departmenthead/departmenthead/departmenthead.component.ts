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
  selector: 'app-departmenthead',
  templateUrl: './departmenthead.component.html',
  styleUrls: ['./departmenthead.component.css'],
})
export class DepartmentheadComponent {
  userRole: string = 'Department Head ';

  yourFieldsArray: Field[] = [
    {
      logo: 'assets/tickets-icon.png',
      title: 'Waiting For Approval',
    },
  ];
  showDepartmentHeadTickets: boolean = false;
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
    if (clickedField.title === 'My Team') {
      this.showDepartmentHeadTickets = true;
      this.router.navigate(['l2admin-subordinates']);
    } else if (clickedField.title === 'Waiting For Approval') {
      this.showDepartmentHeadTickets = true;
      this.router.navigate(['departmenthead/departmentHead-tickets']);
    } else {
      this.showDepartmentHeadTickets = false;
    }
  }

  onSubfieldClicked(event: { field: Field; subfield: string }) {
    return null;
  }
}
