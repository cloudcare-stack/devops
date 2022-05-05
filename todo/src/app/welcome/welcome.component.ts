import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Java: @ComponentScan(value = "com.revature.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})

//Java: public class SpringBootFirstWebApplication implements SomeInterface{}
export class WelcomeComponent implements OnInit {
  //String message = "Some welcome message"
  message = 'Some welcome message';
  name = '';

  //Java: public SpringBootFirstWebApplication(){}
  //Activated Router
  constructor(private route: ActivatedRoute) {}

  //Java: void init()
  ngOnInit(): void {
    console.log(this.message);
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }
}
