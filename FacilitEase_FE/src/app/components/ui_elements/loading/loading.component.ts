import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { MsalService } from '@azure/msal-angular';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {
  constructor(private router: Router, private azureService: AzureService) {}

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: any) {
    if (sessionStorage.getItem('AzureJwt') == null) {
      this.azureService.Logout();
    }
  }
}
