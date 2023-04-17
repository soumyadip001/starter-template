import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTileComponent } from './movie-tile.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

describe('MovieTileComponent', () => {
  let component: MovieTileComponent;
  let fixture: ComponentFixture<MovieTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieTileComponent],
      imports: [
        MatCardModule,
        MatIconModule,
        MatButtonModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
