import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.css']
})
export class TestHomeComponent implements OnInit {

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
    window.open(social);
  }

}
