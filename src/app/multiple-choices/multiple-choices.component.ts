import { Component, OnInit } from '@angular/core';
import { MultipleChoiceService } from '../service/data/multiple-choice.service';

@Component({
  selector: 'app-multiple-choices',
  templateUrl: './multiple-choices.component.html',
  styleUrls: ['./multiple-choices.component.css']
})
export class MultipleChoicesComponent implements OnInit {

  multiple_choices :[]
  isOffline = false

  constructor(private multipleService: MultipleChoiceService) { }

  //select all function 
  selectAll() {
    this.multipleService.selectAll().subscribe(
      response => this.handleSelectAll(response),
      error => this.isOffline = true
    )
  }
  //handle select all function
  handleSelectAll(response) {
    this.isOffline = false
    this.multiple_choices = response.data
    console.log(response)
  }

  ngOnInit() {
    this.selectAll();
  }

}
