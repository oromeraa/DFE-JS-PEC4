import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiLogin = 'http://localhost:3000/user/login';
  private apiRegister = 'http://localhost:3000/user/register';

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiLogin}`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('login_token', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('login_token');
  }

  register(newUser: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiRegister}`, newUser);
  }
}
