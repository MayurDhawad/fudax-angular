import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-ico',
  templateUrl: './ico.component.html',
  styleUrls: ['./ico.component.scss']
})
export class IcoComponent implements OnInit {

  movies = []

  constructor( private _movies : MoviesService) { }

  ngOnInit(): void {
     this._movies.getMovies()
        .subscribe(
            res => this.movies = res,
            res => console.log(res),
        )
  }

}
