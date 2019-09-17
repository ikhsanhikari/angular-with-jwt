import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShortAnswerDataService } from '../service/data/short-answer-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-short-answer',
  templateUrl: './form-short-answer.component.html',
  styleUrls: ['./form-short-answer.component.css']
})
export class FormShortAnswerComponent implements OnInit {

  question: string
  answer: string

  @Output()
  getEmit = new EventEmitter()

  @Output()
  getByIdEmit = new EventEmitter()

  constructor(private shortAnswerDataService: ShortAnswerDataService) { }

  ngOnInit() {
    this.getByIdEmit.emit()
  }

  // save() {
  //   this.shortAnswerDataService.save({
  //     question: this.question,
  //     shortAnswer: this.answer,
  //   }).subscribe(
  //     data => {
  //       Swal.fire(
  //         'Success!',
  //         'Your data has been saving',
  //         'success'
  //       )
  //       this.question = ''
  //       this.answer = ''
  //       this.getEmit.emit();
  //     }
  //   )
  // }

}
