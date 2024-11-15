import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserPermissionsService {
  constructor(private http: HttpClient) {}
  getPermissions(userId: number): Observable<any> {
    return this.http.get<any>(
      `https://localhost:7049/api/UserPermissions/${userId}`
    );
  }
}