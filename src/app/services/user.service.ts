import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api: string = 'http://localhost:4040/pms/api/v1/users1';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {}

  login(user: User): Observable<User> {
    return this.http.post<User>(this.api.concat('/login'), user, this.httpOptions);
  }

  signUp(user:User): Observable<string>{
    return this.http.post<string>(this.api,user, {responseType:'text' as 'json'});

  }
}
