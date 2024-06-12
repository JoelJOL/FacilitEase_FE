import { ApproveDenyService } from '@app/features/service/httpService/DH-aproveDeny/approve-deny.service';
import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

import { Card } from './components/layout/employee-cards/card.model';
import { AzureService } from './features/Authentication/azureService/azure.service';
import { Subject } from 'rxjs';
import { AzureReturn } from './features/Authentication/authModels/model';
import { MsalService } from '@azure/msal-angular';
interface Field {
  logo: string;
  title: string;
  subfields?: string[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FaciltEase_FE';
  fields: Field[] = [
    { logo: 'assets/tickets-icon.png', title: 'Employee Tickets' },
    { logo: 'assets/ticket-approval.png', title: 'Waiting For Approval' },
    { logo: 'assets/ticket-approval.png', title: 'Waiting For Approval' },
  ];

  cards: Card[] = [
    {
      title: 'Raise a Ticket',
      content: 'Click here to raise a ticket.',
      logo: 'ticket',
    },
    {
      title: 'Knowledge Base',
      content: 'Click here to access the knowledge base.',
      logo: 'knowledge-base',
    },
    // Add more cards as needed
  ];

  constructor(
    private azureService: AzureService,
    private authService: MsalService,
  ) {}
  token: string = '';
  azureReturn: AzureReturn = {
    token: '',
  };
  isLogged: boolean = false;
  ngOnInit() {
    this.azureService.isUserLoggedIn.subscribe((data) => {
      this.isLogged = data;
    });

    const account = this.authService.instance.getAllAccounts()[0];
    const accessTokenRequest = {
      scopes: ["user.read"],
      account: account,
    };
    this.authService.instance.acquireTokenSilent(accessTokenRequest)
          .then( (accessTokenResponse) => {
            // Acquire token silent success
            this.token = accessTokenResponse.idToken;
          })
          .catch(function (error) {
            //Acquire token silent failure, and send an interactive request
            console.log(error);
          });

    const token = sessionStorage.getItem('FacilitEaseJwt');
    if (token != null) {
      this.azureReturn.token = token;
      this.azureService.ResolveToken(this.azureReturn);
    } else {
      if (this.isLogged == false) {
        this.azureService.Logout();
      }
    }
  }
}
