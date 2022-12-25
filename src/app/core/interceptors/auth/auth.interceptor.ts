import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/api/auth/auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    {
      request = request.clone({
        withCredentials: true,
        setHeaders: {
          Authorization: `Bearer ${this.authService.token.getValue()}`,
        },
      });
    }
    return next.handle(request);
  }
}
