import { Injectable } from '@angular/core';
import {
  AssetDetails,
  AssetHistory,
} from '@app/features/l3admin/l2Models/model';
import { HttpClient } from '@angular/common/http'; // Correct import statement
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private apiUrl = 'https://localhost:7049/assets/unassigned-asset-details';

  constructor(private http: HttpClient) {}

  getUnassignedAssetDetails(id: number): Observable<AssetDetails> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<AssetDetails>(url);
  }
  private assetHistoryUrl = 'https://localhost:7049/assets/asset-history';
  getAssetHistory(assetId: number): Observable<AssetHistory[]> {
    const url = `${this.assetHistoryUrl}/${assetId}`;
    return this.http.get<AssetHistory[]>(url);
  }
}
