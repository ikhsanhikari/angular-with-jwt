import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PingDataService } from '../service/data/ping-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  message = 'Welcome to Awesome App '
  name = ''
  welcomeMessage: string

  constructor(private router:ActivatedRoute,private pingDataService:PingDataService) { }

  ngOnInit() {
    console.log(this.message)
    this.name = this.router.snapshot.params['name'];
  }

  getPing(){
    this.pingDataService.executePingMessage().subscribe(
      response=> this.handleSuccessGetPing(response)
    );
  }

  handleSuccessGetPing(response){
    this.welcomeMessage = response.data
  }

}
