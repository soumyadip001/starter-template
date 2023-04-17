import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MovieDetails, MovieTile } from '../config/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  defaultCountry: string = 'US';
  popularTitles: string[] = [];
  movieTiles: MovieTile[] = [];

  constructor(
    private readonly moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.moviesService.fetchPopularMoviesMock(this.defaultCountry).subscribe(res => {
      if (res && res.length > 0) {
        this.popularTitles = [...res];
        this.fetchTopMovieDetails();
      }
    })
  }

  fetchTopMovieDetails() {
    if (this.popularTitles.length) {
      this.popularTitles.slice(0, 5).forEach(title => {
        this.fetchMovieDetails(title);
      })
    }
  }

  fetchMovieDetails(title: string) {
    console.log('Fetching details for title', title);
    const extractedTitle = this.extractTitle(title);
    this.moviesService.getMovieDetailsFromTitleMock(extractedTitle).subscribe((res: MovieDetails) => {
      if (res) {
        this.movieTiles.push({
          cols: 3, rows: 6,
          details: res
        })
      }
    })
  }

  extractTitle(title: string) {
    return title.replace('/title/', '').replace('/', '');
  }

}
