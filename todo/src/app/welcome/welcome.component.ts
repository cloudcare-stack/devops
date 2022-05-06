import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

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
  welcomeMessageFromService: string | undefined;
  name = '';

  //Java: public SpringBootFirstWebApplication(){}
  //Activated Router
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  //Java: void init()
  ngOnInit(): void {
    console.log(this.message);
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service
      .executeHelloWorldBeanService()
      .subscribe((response) => this.handleSuccessfulResponse(response));

    console.log('last line of getWelcomeMessage');

    //console.log('get welcome message');
  }

  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }
}
