import { Component, Inject } from '@angular/core';
import { Subject, filter, takeUntil } from 'rxjs';
import {
  MSAL_GUARD_CONFIG,
  MsalBroadcastService,
  MsalGuardConfiguration,
  MsalRedirectComponent,
  MsalService,
} from '@azure/msal-angular';
import {
  AuthenticationResult,
  InteractionStatus,
  PopupRequest,
  RedirectRequest,
} from '@azure/msal-browser';
import { AzureService } from '../azureService/azure.service';
import { environment } from 'environments/environment';
import { azureObj } from '../authModels/model';
import { AzureReturn } from '../authModels/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent {
  isUserLoggedIn: boolean = false;
  private readonly _destroy = new Subject<void>();

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalBroadCastService: MsalBroadcastService,
    private authService: MsalService,
    private azureService: AzureService,
    private router: Router
  ) {}

  azureObj: azureObj = {
    idToken: '',
    accessToken: '',
    localAccountId: '',
    expiration: 0,
    name: '',
    username: '',
  };
  azureReturn: AzureReturn = {
    token: '',
  };

  ngOnInit(): void {
    this.msalBroadCastService.inProgress$
      .pipe(
        filter(
          (interactionStatus: InteractionStatus) =>
            interactionStatus == InteractionStatus.None
        ),
        takeUntil(this._destroy)
      )
      .subscribe((x) => {
        this.isUserLoggedIn =
          this.authService.instance.getAllAccounts().length > 0;

        this.isUserLoggedIn = this.azureService.isLogged;

        // console.log('isUserLoggedIn : ', this.isUserLoggedIn);
        console.log(this.authService.instance.getAllAccounts());

        const account = this.authService.instance.getAllAccounts();

        this.azureObj.localAccountId = account[0].localAccountId ?? '';
        this.azureObj.expiration = account[0].idTokenClaims?.exp ?? 0;
        this.azureObj.name = account[0].name ?? '';
        this.azureObj.username = account[0].username;

        console.log(this.azureObj);
        this.azureService.azureObj = this.azureObj;

        this.azureService.isUserLoggedIn.next(this.isUserLoggedIn);
      });
  }
  Login() {
    sessionStorage.removeItem('FacilitEaseJwt');
    if (this.msalGuardConfig.authRequest) {
      this.authService
        .loginPopup({
          ...this.msalGuardConfig.authRequest,
        } as RedirectRequest)
        .subscribe((authenticationResult) => {
          const accessToken = authenticationResult.accessToken;
          this.azureObj.accessToken = accessToken;
          this.azureObj.idToken = authenticationResult.idToken;
          this.azureService.isLogged = true;
          if (!sessionStorage.getItem('FacilitEaseJwt')) {
            this.azureService.AzureData(this.azureObj).subscribe((response) => {
              this.azureService.ResolveToken(response);
              console.log(response);
              sessionStorage.setItem('FacilitEaseJwt', response.token);
            });
          }
        });
    } else {
      this.authService.loginPopup().subscribe((response) => {
        console.log('Authentication Result:', response);

        const accessToken = response.accessToken;
        this.azureObj.accessToken = accessToken;
      });
    }
  }

  Logout() {
    this.authService.logoutRedirect({
      postLogoutRedirectUri: environment.postLogoutUrl,
    });
  }

  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }
}
