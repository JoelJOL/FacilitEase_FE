import { Component } from '@angular/core';
import { AzureService } from '@app/features/Authentication/azureService/azure.service';
import { MsalService } from '@azure/msal-angular';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-profilepic-dropdown',
  templateUrl: './profilepic-dropdown.component.html',
  styleUrls: ['./profilepic-dropdown.component.css'],
})
export class ProfilepicDropdownComponent {
  constructor(private azureService: AzureService) {}
  userName: string = '';
  ngOnInit() {
    this.userName = this.azureService.userName;
  }
  Logout() {
    this.azureService.Logout();
  }
}
