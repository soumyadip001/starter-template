import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONFIGS, API_URLS } from '../config/api_urls';
import { MovieDetails } from '../config/movie.model';
import { of } from 'rxjs/internal/observable/of';
import { environment } from '../../environment/env';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  fetchPopularMovies(country: string = 'US'): Observable<any> {
    const query = `?homeCountry=${country}&purchaseCountry=${country}&currentCountry=${country}`;
    const options = { headers: new HttpHeaders().set('X-RapidAPI-Key', environment.RapidAPIKey).set('X-RapidAPI-Host', environment.RapidAPIHost) };
    return this.http.get(`${API_CONFIGS.IMDB_URL}${API_URLS.fetchPopularMovies}${query}`, options);
  }

  fetchPopularMoviesMock(country: string = 'US'): Observable<any> {
    return of([
      "/title/tt6718170/", "/title/tt1517268/",
      "/title/tt2906216/", "/title/tt10366206/",
      "/title/tt15255288/", "/title/tt16419074/",
      "/title/tt12758060/", "/title/tt1630029/",
      "/title/tt1618434/", "/title/tt11145118/",
      "/title/tt10151854/",
    ])
  }

  getMovieDetailsFromTitle(title: string): Observable<MovieDetails> {
    const options = {
      params: new HttpParams().set('tconst', title),
      headers: new HttpHeaders().set('X-RapidAPI-Key', environment.RapidAPIKey).set('X-RapidAPI-Host', environment.RapidAPIHost)
    };
    return this.http.get(`${API_CONFIGS.IMDB_URL}${API_URLS.getMovieDetailsFromTitle}`, options) as any;
  }

  getMovieDetailsFromTitleMock(title: string): Observable<MovieDetails> {
    const mockFile = `assets/mock/movieDetailsMock.json`
    return this.http.get(mockFile) as any;
  }
}
