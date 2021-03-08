import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes : Quiz[] = [
      {
        question: 'Capital of india',
        answer:[
          { option: 'mumbai', correct: false},
          { option: 'kolkata', correct: false},
          { option: 'delhi', correct: true},
          { option: 'hyderabad', correct: false},
        ]
      },
      {
        question: 'color of banana is',
        answer:[
          { option: 'red', correct: false},
          { option: 'yellow', correct: true},
          { option: 'green', correct: false},
          { option: 'blue', correct: false},
        ]
      },
      {
        question: 'bootstrap grid system is of',
        answer:[
          { option: '14 grid', correct: false},
          { option: '8 grid', correct: false},
          { option: '4 grid', correct: false},
          { option: '12 grid', correct: true},
        ]
      },
      {
        question: 'Capital of telangana',
        answer:[
          { option: 'mumbai', correct: false},
          { option: 'kolkata', correct: false},
          { option: 'delhi', correct: false},
          { option: 'hyderabad', correct: true},
        ]
      },
      {
        question: 'chief minister of delhi',
        answer:[
          { option: 'chandra babu naidu', correct: false},
          { option: 'mamta banerjee', correct: false},
          { option: 'arvind kejrewal', correct: true},
          { option: 'jagan mohan reddy', correct: false},
        ]
      },
  ];


  constructor() { }

  getQuizzes(){
    return this.quizzes;
  }
}
