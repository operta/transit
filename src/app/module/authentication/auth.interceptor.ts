import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {SERVER_API_URL} from '../../app.constants';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (request.url.startsWith('http') && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL)))) {
      return next.handle(request);
    }
    const token = localStorage.getItem('jwt_token');
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    });

    return next.handle(request);
  }
}
