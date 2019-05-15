import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDonationClicked = false;

  medium = 'https://medium.com/@cancodeka';
  facebook = 'https://www.facebook.com/canc0deka';
  linkedin = 'https://www.linkedin.com/company/cancodeka';
  gmail = 'mailto:cancodeka@gmail.com';
  gogetfund = 'https://gogetfunding.com/cancodeka/';

  constructor() { }

  ngOnInit() {
  }

  openSocial(social: string) {
    console.log(social);
    window.open(social);
  }

}
