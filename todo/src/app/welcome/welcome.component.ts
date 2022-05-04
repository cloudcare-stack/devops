import { Component, OnInit } from '@angular/core';

//Java: @ComponentScan(value = "com.revature.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//Java: public class SpringBootFirstWebApplication implements SomeInterface{}
export class WelcomeComponent implements OnInit {

  //String message = "Some welcome message"
  message = 'Some welcome message'

  //Java: public SpringBootFirstWebApplication(){}
  constructor() { }

  //Java: void init()
  ngOnInit(): void {
    console.log(this.message)
  }

}
