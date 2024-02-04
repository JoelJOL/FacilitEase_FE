import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Observable, Subject } from 'rxjs';
import { azureObj } from '../authModels/model';
import { Profile } from '../authModels/model';
import { AuthenticationResult } from '@azure/msal-browser';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Injectable({
  providedIn: 'root',
})
export class AzureService {
  isUserLoggedIn: Subject<boolean> = new Subject<boolean>();
  data: any;
  constructor(private http: HttpClient, private authService: MsalService) {}

  AzureData(azureObj: azureObj): Observable<azureObj> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${azureObj.idToken}`,
    });
    return this.http.post<azureObj>(
      'https://localhost:7049/api/User',
      {
        idToken: azureObj.idToken,
        accessToken: azureObj.accessToken,
        localAccountId: azureObj.localAccountId,
        expiration: azureObj.expiration,
        name: azureObj.name,
        username: azureObj.username,
      },
      { headers }
    );
  }
}
