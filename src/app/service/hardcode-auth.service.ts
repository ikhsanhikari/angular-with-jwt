import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthService {

  constructor() { }
  
  hardCodeAuth(username, password) {
    if (username == "ikhsanhikari" && password == "hikari29") {
      sessionStorage.setItem('userLogin',username)
      console.log('logged in')
      return true
    }
    console.log('logged out')
    return false
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('userLogin')
    return !(user==null)
  }

  logout(){
    sessionStorage.removeItem('userLogin')
  }
}
