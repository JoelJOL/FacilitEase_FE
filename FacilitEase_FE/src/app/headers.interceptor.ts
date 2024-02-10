import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request and adding a custom header
    const idToken = sessionStorage.getItem('AzureJwt');
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    console.log('Modified Request:', modifiedRequest);
    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
