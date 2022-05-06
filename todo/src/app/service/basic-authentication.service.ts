import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(username: any, password: any) {
    if (username === 'Colin' && password === 'howie') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  executeAuthenticationService(username: any, password: any) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    return this.http
      .get<AuthenticationBean>(`http://localhost:8080/basicauth`, {
        headers,
      })
      .pipe(
        map((data) => {
          sessionStorage.setItem('authenticaterUser', username);
          return data;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
