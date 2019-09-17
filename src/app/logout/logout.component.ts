import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private basicAuth:BasicAuthService) { }

  ngOnInit() {
    this.basicAuth.logout()
  }

}
