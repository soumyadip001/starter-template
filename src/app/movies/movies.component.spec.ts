import { result } from './../../assets/mock/movieDetailsMock_tt15255288';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { MovieTileComponent } from '../movie-tile/movie-tile.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MoviesService } from '../services/movies.service';
import { MovieTitles } from '../../assets/mock/getTitlesMock';
import { of } from 'rxjs/internal/observable/of';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let moviesService: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MoviesComponent,
        MovieTileComponent,
      ],
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatInputModule,
        MatIconModule
      ],
      providers: [
        { provide: moviesService, useClass: MoviesService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    moviesService = fixture.debugElement.injector.get(MoviesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #fetchMovies', () => {
    const spy = spyOn(moviesService, 'fetchPopularMoviesMock').and.returnValue(of(MovieTitles));
    component.fetchMovies();
    expect(spy).toHaveBeenCalled();
  });

  it('should call #fetchMovieDetails', () => {
    const title = '/title/tt7740496/';
    const spy = spyOn(moviesService, 'getMovieDetailsFromTitleMock').and.returnValue(of(result as any));
    component.fetchMovieDetails(title);
    expect(spy).toHaveBeenCalled();
  });

  it('should return correct title when calling #extractTitle', () => {
    const title = '/title/tt7740496/';
    expect(component.extractTitle(title)).toEqual('tt7740496');
  });
});
