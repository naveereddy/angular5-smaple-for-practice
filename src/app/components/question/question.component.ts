import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/Question';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  /**
   * @Input() binding for the question received from the question-list compoenent
   */
  @Input() question: Question;

  constructor(public dataService: DataService) { }


  /**
   * Called when a specific question is to be removed
   * @param question  Question to be removed
   */
  removeQuestion(question: Question) {
    this.dataService.removeQuestion(question);
  }

}
