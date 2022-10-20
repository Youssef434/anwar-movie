import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MovieItemComponent,
    ListMoviesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MovieItemComponent,
    ListMoviesComponent
  ]
})
export class MovieModule { }
