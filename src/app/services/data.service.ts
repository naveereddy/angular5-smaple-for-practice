import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  /**
   * question: Question[]
   * Holds the list of all the questions
   */
  questions: Question[];

  constructor() { }

  /**
   * Returns the list of saved questions (if any) in the localStorage or an empty array if none are present
   */
  getQuestions() {
    this.questions = [];
    if (localStorage.getItem('questions') !== null) {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  /**
   * Saves a question to the localStorage
   * @param question 
   */
  addQuestion(question: Question) {
    this.questions.unshift(question);
    let questions = [];
    if (localStorage.getItem('questions') !== null) {
      questions = JSON.parse(localStorage.getItem('questions'));
    }
    questions.unshift(question);
    localStorage.setItem('questions', JSON.stringify(questions));
  }

  /**
   * Removes a question from the localStorage
   */
  removeQuestion(question: Question) {
    this.questions.splice(this.questions.indexOf(question), 1);
    localStorage.setItem('questions', JSON.stringify(this.questions));
  }

}
