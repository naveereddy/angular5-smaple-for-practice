import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent implements OnInit {

  /**
   * questions: array
   * For holding all the questions
   */
  questions: Question[];

  constructor(public dataService: DataService) {

  }

  /**
   * Get all the questions from the localStorage using the dataService
   */
  ngOnInit() {
    this.questions = this.dataService.getQuestions();
  }

  /**
   * Save the question using dataService to localStorage
   * @param question Question to be saved
   */
  addQuestion(question: Question) {
    this.dataService.addQuestion(question);
  }
}
