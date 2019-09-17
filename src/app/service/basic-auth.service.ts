import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators"
import { BASE_API_URL } from '../app-constant';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http:HttpClient) { }


  executeJWTAuth(username,password){
    
    return this.http.post<any>(`${BASE_API_URL}/authenticate`,{username,password}
    ).pipe(
      map(
        data=>{
          sessionStorage.setItem('userLogin',username)
          sessionStorage.setItem('token','Bearer '+data.token)
          return data
        }
      )
    )
  }
  
  hardCodeAuth(username, password) {
    if (username == "ikhsanhikari" && password == "hikari29") {
      sessionStorage.setItem('userLogin',username)
      console.log('logged in')
      return true
    }
    console.log('logged out')
    return false
  }


  executeBasicAuth(username,password){
    let basicAuthString = 'Basic '+window.btoa(username+':'+password)
    let header = new HttpHeaders(
      {
        Authorization : basicAuthString
      }
    )
    return this.http.get(`${BASE_API_URL}/basicAuth`
    ,{headers:header}).pipe(
      map(
        data=>{
          sessionStorage.setItem('userLogin',username)
          sessionStorage.setItem('token',basicAuthString)
          return data
        }
      )
    )
  }

  getAuthUser(){
    return sessionStorage.getItem('userLogin')
  }

  getAuthToken(){
    if(this.getAuthUser)
      return sessionStorage.getItem('token')
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('userLogin')
    return !(user==null)
  }

  logout(){
    sessionStorage.removeItem('userLogin')
    sessionStorage.removeItem('token')
  }
}
