import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  
  quizzes : Quiz[] = []

  currentQuizzes = 0;
  selectedAnswer = false;
  correctAnswer = 0;
  incorrectAnswer = 0;
  result = false;

  randomQuiz:number;
  index1:any;

  constructor( private _quiz : QuizService) { }

  ngOnInit(): void {
      this.quizzes = this._quiz.getQuizzes()
      this.randomQuiz = Math.floor(Math.random() * this.quizzes.length)
  }

  onAnswer(option : boolean){
    this.selectedAnswer = true;
      setTimeout(()=>{
        this.currentQuizzes++
        this.randomQuiz = Math.floor(Math.random() * this.quizzes.length)
       
        this.selectedAnswer = false;
      }, 1000)
      
      if(option){
        this.correctAnswer++
      }else{
        this.incorrectAnswer++
      }
  }

  showResult(){
      this.result = true;
  }

}
