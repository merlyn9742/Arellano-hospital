import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = `${environment.api}/auth`;

  constructor(private httpClient: HttpClient) {
  }

  signIn(email: string, password: string): Observable<UserInterface> {
    return this.httpClient.post<UserInterface>(`${(this.baseUrl)}/sign-in`, { email, password });
  }
}
