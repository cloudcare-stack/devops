import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'Colin';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  //Java: Router router;

  //Router
  //Angular give me router
  //Dependency Injection
  constructor(private router: Router) {
    //Java: this.router = router;
  }

  ngOnInit(): void {}

  handleLogin() {
    //console.log(this.username);
    //console.log(this.password);
    if (this.username === 'Colin' && this.password === 'howie') {
      //Redirect to Welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
