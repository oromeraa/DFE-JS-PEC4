import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStoreService } from '../user-store/user-store.service';

@Injectable()
export class articleAppInterceptor implements HttpInterceptor {

  constructor(
    private userStoreService: UserStoreService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptando petición');
    console.log(req);
    const token = this.userStoreService.getToken();

    if (token) {
      console.log('Token encontrado');
      const req_auth = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
      return next.handle(req_auth);
    }

    return next.handle(req);
  }
}
