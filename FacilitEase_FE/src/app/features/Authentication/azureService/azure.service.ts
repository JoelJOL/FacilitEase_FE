import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Observable, Subject } from 'rxjs';
import { azureObj } from '../authModels/model';
import { Profile } from '../authModels/model';
import { AzureReturn } from '../authModels/model';
import { AuthenticationResult } from '@azure/msal-browser';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Injectable({
  providedIn: 'root',
})
export class AzureService {
  isUserLoggedIn: Subject<boolean> = new Subject<boolean>();
  isLogged: boolean = false;
  isL1Admin: boolean = false;
  isL2Admin: boolean = false;
  isL3Admin: boolean = false;
  isManager: boolean = false;
  isDepartmentHead: boolean = false;
  isEmployee: boolean = false;
  data: any;
  userValid: boolean = false;
  azureObj: azureObj = {
    idToken: '',
    accessToken: '',
    localAccountId: '',
    expiration: 0,
    name: '',
    username: '',
  };
  employeeIn: boolean = false;
  userId: number = 0;
  userName: string = '';
  userRoles: string[] = [];
  azureRoles: string[] = [];
  navigateFirst: boolean = true;
  constructor(
    private http: HttpClient,
    private authService: MsalService,
    private router: Router
  ) {}
  ResolveToken(response: AzureReturn) {
    const token = response.token;
    const azureToken = sessionStorage.getItem('AzureJwt');
    if (azureToken != null) {
      const decodedToken: any = jwtDecode(azureToken);
      this.azureRoles = decodedToken['roles'];
      console.log(this.azureRoles);
      if (!this.azureRoles.includes('Employee')) {
        this.azureRoles.push('Employee');
      }

      console.log(this.azureRoles);
    }
    try {
      const decodedToken: any = jwtDecode(token);
      this.isLogged = true;
      this.userId =
        decodedToken[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ];
      console.log(this.userId);
      this.userName =
        decodedToken[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
        ];
      this.userRoles =
        decodedToken[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ];

      this.isL1Admin = this.azureRoles.includes('L1Admin');
      this.isL2Admin = this.azureRoles.includes('L2Admin');
      this.isL3Admin = this.azureRoles.includes('L3Admin');
      this.isDepartmentHead = this.azureRoles.includes('DepartmentHead');
      this.isManager = this.azureRoles.includes('Manager');
      this.isEmployee = this.azureRoles.includes('Employee');
      this.isEmployee = true;

      if (this.navigateFirst) {
        if (this.isL1Admin) {
          this.router.navigate(['/l1admin']);
        } else if (this.isL2Admin) {
          this.router.navigate(['/l2admin/unassigned-tickets']);
        } else if (this.isL3Admin) {
          this.router.navigate(['l3admin/view-ticket']);
        } else if (this.isDepartmentHead) {
          this.router.navigate(['/departmenthead']);
        } else if (this.isManager) {
          this.router.navigate(['/manager/manager-view-waiting-tickets']);
        } else if (this.isEmployee) {
          this.router.navigate(['/employee/employeecard']);
        } else {
          console.error('No valid role found for navigation.');
        }
        this.navigateFirst = false;
      }

      this.userValid = true;
    } catch (error) {
      this.Logout();
      console.error('Error decoding JWT token:', error);
    }
    console.log(this.userRoles);
  }

  AzureData(azureObj: azureObj): Observable<AzureReturn> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${azureObj.idToken}`,
    });
    console.log('post');
    return this.http.post<AzureReturn>(
      'https://localhost:7049/api/User',
      {
        idToken: azureObj.idToken,
        AccessToken: azureObj.accessToken,
        localAccountId: azureObj.localAccountId,
        expiration: azureObj.expiration,
        name: azureObj.name,
        username: azureObj.username,
      },
      { headers }
    );
  }
  Logout() {
    console.log('logout');
    this.isLogged = false;
    this.authService.logoutRedirect({
      postLogoutRedirectUri: environment.postLogoutUrl,
    });
    sessionStorage.clear();
  }
}
