import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/data/feedback.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  name = ''
  email = ''
  feedback = ''

  isLoading = false

  constructor(private feed: FeedbackService) { }

  ngOnInit() {
  }

  send() {
    console.log(this.valid())
    if (this.valid()) {
      this.isLoading = true
      this.feed.send({
        email: this.email,
        name: this.name,
        feedback: this.feedback
      }).subscribe(
        data => {
          Swal.fire(
            'Success',
            'Your data has been saving !',
            'success'
          )
          this.isLoading = false
        },
        error => {
          console.log(error);
          Swal.fire(
            'Error',
            '500 Server error',
            'error'
          )
          this.isLoading = false
        }
      )
    } else {
      this.isLoading = false
      Swal.fire(
        'Error',
        'Fill all required !',
        'error'
      )
    }

  }

  //validation
  valid() {
    let status = true;
    console.log('name : '+this.name)
    if (this.name === '' ||
    this.feedback === '' ||
    this.email === '') {
      status = false;
    }
    return status;
  }

}
