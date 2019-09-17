import { Component, OnInit } from '@angular/core';
import { HardcodeAuthService } from '../service/hardcode-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private hardCodeAuthService: HardcodeAuthService) { }

  ngOnInit() {
    this.hardCodeAuthService.isUserLoggedIn();
  }

}
