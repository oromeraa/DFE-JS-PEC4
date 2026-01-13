import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserStoreService } from '../user-store/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public readonly apiLogin = 'http://localhost:3000/api/user/login';
  public readonly apiRegister = 'http://localhost:3000/api/user/register';

  constructor(
    private http: HttpClient,
    private userStoreService: UserStoreService
  ) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiLogin}`, credentials).pipe(
      tap((res: any) => {
        this.userStoreService.setToken(res.token);
      })
    );
  }

  register(newUser: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiRegister}`, newUser);
  }

  logout(): void {
    this.userStoreService.removeToken();
  }

  isLogged(): boolean {
    return this.userStoreService.getToken() !== null;
  }
}
