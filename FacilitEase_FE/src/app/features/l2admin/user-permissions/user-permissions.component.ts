import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserPermissionsService } from '@app/features/service/httpService/UserPermissionService/user-permissions.service.spec';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.css']
})

export class UserPermissionsComponent {
  constructor(private UserPermissionsService: UserPermissionsService, private http: HttpClient) {}

  userId: number = 1;
  permissions: any[] = [];
  apiUrlEdit = 'https://localhost:7049/api/UserPermissions/';

  ngOnInit() {

    this.UserPermissionsService.getPermissions(this.userId).subscribe(
      (data: any) => {
        console.log(data);
        this.permissions = data;
      },
      (error: any) => {
        if (error.status === 404 && error.statusText === 'OK') {
          console.error('Suggestions not found (404 error).');
        } else {
          console.error('Error fetching suggestions:', error);
        }
      }
    );
  }

  toggleActive(userPermissionId: number, isActive: any): void {
    console.log("Clicked here" + userPermissionId + !isActive);

    this.updatePermission(userPermissionId, !isActive).subscribe(
      (data: any) => {
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  updatePermission(userPermissionId: number, isActive: boolean) {
    return this.http.patch(this.apiUrlEdit + userPermissionId, {"isActive":isActive});
  }

}
