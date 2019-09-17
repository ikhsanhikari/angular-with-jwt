import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from 'src/app/app-constant';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  send(params : Feedback){
    return this.http.post<Feedback>(`${BASE_API_URL}/feedback`,params);
  }

}


export class Feedback{
  constructor(
    public name:string,
    public email:string,
    public feedback:string
  ){}
}