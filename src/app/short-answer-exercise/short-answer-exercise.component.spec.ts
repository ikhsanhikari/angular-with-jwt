import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortAnswerExerciseComponent } from './short-answer-exercise.component';

describe('ShortAnswerExerciseComponent', () => {
  let component: ShortAnswerExerciseComponent;
  let fixture: ComponentFixture<ShortAnswerExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortAnswerExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortAnswerExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
