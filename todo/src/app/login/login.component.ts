import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Colin'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    //console.log(this.username);
    //console.log(this.password);
    if(this.username === 'Colin' && this.password === 'howie'){
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
