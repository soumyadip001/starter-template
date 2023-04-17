import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoviesService } from './movies.service';
import { API_CONFIGS, API_URLS } from '../config/api_urls';
import { MovieTitles } from '../../assets/mock/getTitlesMock';
import { result } from '../../assets/mock/movieDetailsMock_tt1517268';

describe('MoviesService', () => {
  let service: MoviesService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(MoviesService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all #fetchPopularMovies', () => {
    service.fetchPopularMovies().subscribe((movies: any) => {
      expect(movies).toBeTruthy();
      expect(movies.length).toEqual(100);
    });
    const mockReq = testingController.expectOne(`${API_CONFIGS.IMDB_URL}${API_URLS.fetchPopularMovies}?homeCountry=US&purchaseCountry=US&currentCountry=US`);
    mockReq.flush(MovieTitles);
  });

  it('should fetch all #fetchPopularMoviesMock', () => { 
    service.fetchPopularMoviesMock().subscribe((movies: any) => {
      expect(movies).toBeTruthy();
      expect(movies.length).toEqual(11);
    });
  });

  it('should fetch all #getMovieDetailsFromTitle', () => {
    const reqTitle = 'tt1517268';
    service.getMovieDetailsFromTitle(reqTitle).subscribe((movie: any) => {
      expect(movie).toBeTruthy();
      expect(movie.id.includes(reqTitle)).toBeTruthy();
    });
    const mockReq = testingController.expectOne(`${API_CONFIGS.IMDB_URL}${API_URLS.getMovieDetailsFromTitle}?tconst=${reqTitle}`);
    mockReq.flush(result);
  });

  it('should fetch all #getMovieDetailsFromTitleMock', () => {
    const reqTitle = 'tt1517268';
    service.getMovieDetailsFromTitleMock(reqTitle).subscribe((movie: any) => {
      expect(movie).toBeTruthy();
      expect(movie.id.includes('tt1517268')).toBeTruthy();
    });
  });
});
