import { Component, OnInit } from '@angular/core';
import { AssetService } from '@app/features/service/unassignedAsset/asset.service';
import { AssetDetails, AssetHistory } from '@app/features/Interface/interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assign-asset-to-employee',
  templateUrl: './assign-asset-to-employee.component.html',
  styleUrls: ['./assign-asset-to-employee.component.css'],
})
export class AssignAssetToEmployeeComponent implements OnInit {
  assetDetails!: AssetDetails;
  assetHistory!: AssetHistory[];

  constructor(
    private assetService: AssetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const assetId = 2; // Convert to number using +

      this.assetService.getUnassignedAssetDetails(assetId).subscribe(
        (response) => {
          this.assetDetails = response;
        },
        (error) => {
          console.error('Error fetching asset details:', error);
        }
      );

      this.assetService.getAssetHistory(assetId).subscribe(
        (data: AssetHistory[]) => {
          this.assetHistory = data;
          console.log('Asset History:', this.assetHistory);
        },
        (error) => {
          console.error('Error fetching asset history:', error);
        }
      );
    });
  }
}
