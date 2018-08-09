import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {

  /**
   * @Output() binding for emitting the question after submit
   */
  @Output() questionAdded = new EventEmitter<Question>();

  /**
   * Property binding for question text
   */
  text: string;

  /**
   * Property binding for question answer
   */
  answer: string;

  /**
   * addQuestion fired when submit is clicked.
   * Emits the newly added question event which is listened by the question-list component
   */
  addQuestion() {
    this.questionAdded.emit({
      text: this.text,
      answer: this.answer,
      hide: true
    });
  }

}
