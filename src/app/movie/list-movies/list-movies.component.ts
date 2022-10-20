import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/types/movie';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  movies: Movie[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
