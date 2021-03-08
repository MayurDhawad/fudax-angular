import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule ,RoutingComponents } from './app-routing.module';
import { QuizService } from './services/quiz.service';
import { BackgroundDirective } from './services/background.directive';
import { UserService } from './services/user.service';
import { MoviesService } from './services/movies.service';



@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    BackgroundDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizService, UserService, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
