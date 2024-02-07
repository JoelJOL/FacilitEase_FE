import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetAPIService {
  constructor(private http: HttpClient) {}

  getUnassignedAssets(): string {
    const apiUrl = 'https://localhost:7049/assets/unassigned-assets';
    return apiUrl;
  }

  getEmployeeAssets(userId: number): string {
    const apiUrl = `https://localhost:7049/employee/${userId}`;
    return apiUrl;
  }
}
