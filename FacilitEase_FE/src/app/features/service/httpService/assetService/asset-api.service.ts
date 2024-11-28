import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AssetAPIService {
  constructor(private http: HttpClient) {}

  getUnassignedAssets(): string {
    const apiUrl = environment.baseUrl+'/api/unassigned-assets';
    return apiUrl;
  }

  getEmployeeAssets(userId: number): string {
    const apiUrl = environment.baseUrl+`/api/assets/${userId}`;
    return apiUrl;
  }
}
