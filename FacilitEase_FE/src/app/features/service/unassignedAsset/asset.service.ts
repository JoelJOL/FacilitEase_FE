import { Injectable } from '@angular/core';
import {
  AssetDetails,
  AssetHistory,
} from '@app/features/l3admin/l3Models/model';
import { HttpClient } from '@angular/common/http'; // Correct import statement
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private apiUrl = environment.baseUrl+'/api/assets/unassigned-asset';

  constructor(private http: HttpClient) {}

  getUnassignedAssetDetails(id: number): Observable<AssetDetails> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<AssetDetails>(url);
  }
  private assetHistoryUrl = environment.baseUrl+'/api/asset-history';
  getAssetHistory(assetId: number): Observable<AssetHistory[]> {
    const url = `${this.assetHistoryUrl}/${assetId}`;
    return this.http.get<AssetHistory[]>(url);
  }
}
