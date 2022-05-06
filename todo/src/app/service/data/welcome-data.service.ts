import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(
      'http://localhost:8080/hello-world-bean'
    );
    //console.log('Execute Hello World Bean Service');
  }

  executeHelloWorldServiceWithPathVariable(name: any) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      { headers }
    );
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'Colin';
    let password = 'howie';
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
  //Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/Colin'
  //from origin 'http://localhost:4200' has been blocked by CORS policy:
  //No 'Access-Control-Allow-Origin' header is present on the requested resource

  //Access to XMLHttpRequest
  //Response to preflight request doesn't pass
  //access control check: it does not have HTTP ok status
}
