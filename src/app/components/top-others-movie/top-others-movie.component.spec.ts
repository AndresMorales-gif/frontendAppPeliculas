import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOthersMovieComponent } from './top-others-movie.component';

describe('TopOthersMovieComponent', () => {
  let component: TopOthersMovieComponent;
  let fixture: ComponentFixture<TopOthersMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopOthersMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOthersMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
