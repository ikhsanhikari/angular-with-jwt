import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_API_URL } from 'src/app/app-constant';

@Injectable({
  providedIn: 'root'
})
export class PingDataService {

  constructor(private http:HttpClient) { }
  

  //Header Custom Sample
  /*createBasicAuthHeader(){
    let username = 'ikhsanhikari'
    let password = 'hikari29'
    let basicAuthString = 'Basic '+window.btoa(username+':'+password)
    return basicAuthString;
  }*/

  executePingMessage(){
    
    /*let headerString = this.createBasicAuthHeader()
    let header = new HttpHeaders(
      {
        Authorization : headerString
      }
    )*/

    return this.http.get(`${BASE_API_URL}/ping`)
    // return this.http.get(`http://localhost:8089/ping`,{headers:header})
  }
}
