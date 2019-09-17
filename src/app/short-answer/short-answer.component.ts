import { Component, OnInit } from '@angular/core';
import { ShortAnswerDataService } from '../service/data/short-answer-data.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.css']
})
export class ShortAnswerComponent implements OnInit {

  //variable for response data from Beckend
  short_answers = []
  short_answer: any
  
  //bind data model
  question = ''
  answer = ''
  id = 0
  questionLevel = -1

  //checker
  isUpdate = false
  isOffline = false


  constructor(private shortAnswerDataService: ShortAnswerDataService) { }

  ngOnInit() {
    //display all data in the table
    this.selectAll()
  }

  //select all function 
  selectAll() {
    this.shortAnswerDataService.selectAll().subscribe(
      response => this.handleSelectAll(response),
      error => this.isOffline = true
    )
  }
  //handle select all function
  handleSelectAll(response) {
    this.isOffline = false
    this.short_answers = response.data
  }

  //get by id
  get(id: number) {
    this.shortAnswerDataService.get(id).subscribe(
      data => this.handleGet(data)
    )
  }

  //handle get by id function
  handleGet(data) {
    this.short_answer = data.data
    this.question = this.short_answer.question
    this.answer = this.short_answer.shortAnswer
    this.id = this.short_answer.id
    this.questionLevel = this.short_answer.questionLevel

    this.isUpdate = true   
  }

  //when created button is click
  isCreate(){
    this.isUpdate = false
    this.question = ''
    this.answer = ''
    this.questionLevel = -1
  }

  //saving data
  save() {
    if(this.valid()){
      this.shortAnswerDataService.save({
        question: this.question,
        shortAnswer: this.answer,
        questionLevel: this.questionLevel
      }).subscribe(
        data => {
          Swal.fire(
            'Success!',
            'Your data has been saving',
            'success'
          )
          this.question = ''
          this.answer = ''
          this.selectAll()
        }
      )
    }else{
      Swal.fire(
        'Error!',
        'Please fill all require',
        'error'
      )
    }
    
  }

  //update data
  update() {
    if(this.valid()){
      this.shortAnswerDataService.update({
        question: this.question,
        shortAnswer: this.answer,
        questionLevel: this.questionLevel
      },this.id).subscribe(
        data => {
          Swal.fire(
            'Success!',
            'Your data has been updating',
            'success'
          )
          this.question = ''
          this.answer = ''
          this.selectAll()
        }
      )
    }else{
      Swal.fire(
        'Error!',
        'Please fill all require',
        'error'
      )
    }
    
  }

  //delete data
  delete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.shortAnswerDataService.delete(id).subscribe(
          data => {
            this.selectAll()
          }
        )
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }

  //validation
  valid(){
    let status = true;
    if(this.questionLevel == -1
      || this.answer == ''
      || this.question == ''){
      status = false;
    }
    return status;
  }

}



