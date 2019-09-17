import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthService } from '../service/hardcode-auth.service';
import { BasicAuthService } from '../service/basic-auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false

  constructor(private router:Router, 
    private hardCodeAuthService: HardcodeAuthService,
    private basicAuthService:BasicAuthService) { }

  ngOnInit() {
  }

  handleLoginHardCode(){
    if(this.hardCodeAuthService.hardCodeAuth(this.username,this.password)){
      this.invalidLogin = false
      this.router.navigate(['welcome',this.username]);
    }else{
      this.invalidLogin = true
    }
  }

  handleLoginBasicAuth(){

    this.basicAuthService.executeBasicAuth(this.username,this.password).subscribe(
      data => {
        console.log(data)
        this.invalidLogin = false
        this.router.navigate(['welcome',this.username]);
      },
      error =>{
        this.invalidLogin = true
        console.log(error)
      }
    )
  }

  handleLoginJWTAuth(){

    this.basicAuthService.executeJWTAuth(this.username,this.password).subscribe(
      data => {
        console.log(data)
        this.invalidLogin = false
        this.router.navigate(['welcome',this.username]);
      },
      error =>{
        this.invalidLogin = true
        Swal.fire(
          'Error',
          'Failed to login',
          'error'
        )
        console.log(error)
      }
    )
  }
}
