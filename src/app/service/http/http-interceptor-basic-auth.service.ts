import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService: BasicAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let username = this.basicAuthService.getAuthUser()
    let basicAuthString = this.basicAuthService.getAuthToken()
    if (username && basicAuthString) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      })
    }
    return next.handle(req);
  }


}
