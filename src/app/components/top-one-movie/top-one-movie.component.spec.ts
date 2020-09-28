import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOneMovieComponent } from './top-one-movie.component';

describe('TopOneMovieComponent', () => {
  let component: TopOneMovieComponent;
  let fixture: ComponentFixture<TopOneMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopOneMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOneMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
