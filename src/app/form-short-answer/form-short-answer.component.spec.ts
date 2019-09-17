import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShortAnswerComponent } from './form-short-answer.component';

describe('FormShortAnswerComponent', () => {
  let component: FormShortAnswerComponent;
  let fixture: ComponentFixture<FormShortAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormShortAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormShortAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
