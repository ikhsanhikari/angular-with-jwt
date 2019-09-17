import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from 'src/app/app-constant';

@Injectable({
  providedIn: 'root'
})
export class ShortAnswerDataService {

  constructor(private http:HttpClient) { }

  selectAll(){
    return this.http.get(`${BASE_API_URL}/short-answers`)
  }

  selectAllByRand(){
    return this.http.get(`${BASE_API_URL}/short-answers/rand?limit=1`)
  }

  save(params : ShortAnswer){
    return this.http.post<ShortAnswer>(`${BASE_API_URL}/short-answers`,params);
  }

  update(params : ShortAnswer, id: number){
    return this.http.patch<ShortAnswer>(`${BASE_API_URL}/short-answers/${id}`,params);
  }

  get(id:number){
    return this.http.get(`${BASE_API_URL}/short-answers/${id}`)
  }

  delete(id:number){
    return this.http.delete(`${BASE_API_URL}/short-answers/${id}`)
  }

  
}


//the class for save
export class ShortAnswer {
  constructor(
    public question: string,
    public shortAnswer: string,
    public questionLevel,
  ) {

  }
}
