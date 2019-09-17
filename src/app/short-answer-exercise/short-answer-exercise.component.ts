import { Component, OnInit } from '@angular/core';
import { ShortAnswerDataService } from '../service/data/short-answer-data.service';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-short-answer-exercise',
  templateUrl: './short-answer-exercise.component.html',
  styleUrls: ['./short-answer-exercise.component.css']
})
export class ShortAnswerExerciseComponent implements OnInit {

  short_answers = []

  isOffline = false

  title = 'AngularMultipleData';
  answersForm: FormGroup;

  allAnswer = [
    {
      'answer': '1'
    },
    {
      'answer': '2'
    },
    {
      'answer': '3'
    },
    {
      'answer': '4'
    },
  ]

  // formAnswer : FormGroup
  constructor(private shortAnswerDataService: ShortAnswerDataService, private fb: FormBuilder) {

    // this.formAnswer = this.fb.group({
    //   answers : this.fb.array([{
    //     answer : ''
    //   }]),
    // })
  }

  // formAnswer = new FormGroup({
  //   tes : new FormControl(''),
  //   answers : new FormArray(
  //     [
  //       new FormControl('a'),
  //       new FormControl('s'),
  //       new FormControl('d'),
  //       new FormControl('f'),
  //       new FormControl('d'),
  //     ]
  //   )
  // })

  // answer = new FormControl('')
  //  count = 0
  ngOnInit() {
    //   this.count+=1;
    //   console.log(this.count)
    this.answersForm = this.fb.group({
      SchoolName: [''],
      answerDetails: this.fb.array
    })
    this.selectAll()
    // this.createform()
  }

  createform(params) {
    let arr = [];
    for (let i = 0; i < params.length; i++) {
      arr.push(this.BuildFormDynamic(params[i]))

    }

    this.answersForm = this.fb.group({
      SchoolName: [''],
      answerDetails: this.fb.array(arr)
    })
  }
  BuildFormDynamic(product): FormGroup {
    return this.fb.group({
      answer: [product.question],
      answerText: [''],
    })
  }
  test: any
  SaveData() {
    // this.test = JSON.stringify(this.answersForm.get('answerDetails').value)
    this.test = JSON.stringify(this.answersForm.get('answerDetails')[0].value)
    console.log(JSON.stringify(this.answersForm.value));
    //pass this data to service and api node/webapi  

  }

  //select all function 
  selectAll() {
    this.shortAnswerDataService.selectAllByRand().subscribe(
      response => this.handleSelectAll(response),
      error => this.isOffline = true
    )
  }
  //handle select all function
  handleSelectAll(response) {
    this.isOffline = false
    this.short_answers = response.data
    console.log(this.short_answers)
    this.createform(this.short_answers)
  }

  // test(){
  //   console.log(this.answer.value)
  // }
}
