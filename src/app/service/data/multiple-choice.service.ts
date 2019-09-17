import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from 'src/app/app-constant';

@Injectable({
  providedIn: 'root'
})
export class MultipleChoiceService {

  constructor(private http:HttpClient) { }


  selectAll(){
    return this.http.get(`${BASE_API_URL}/multiple-choices`);
  }
}
