import { Component, Input } from '@angular/core';
import { MovieDetails } from '../config/movie.model';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent {
  @Input() details: MovieDetails = {
    title: '', numberOfEpisodes: 0, titleType: '',
    id: '1', seriesStartYear: 0, year: 0,
    nextEpisode: '', runningTimeInMinutes: 0, seriesEndYear: 0,
    image: { url: '', id: '1' }
  }
}
