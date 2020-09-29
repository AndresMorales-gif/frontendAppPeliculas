import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-others-movie',
  templateUrl: './top-others-movie.component.html',
  styleUrls: ['./top-others-movie.component.css']
})
export class TopOthersMovieComponent implements OnInit {

  @Input() title: String;
  @Input() kind: String;
  @Input() image: String;
  @Input() serieOrMovie: number;
  @Input() launching: Date;
  @Input() topNumber: number;

  public som;

  constructor() { }

  ngOnInit(): void {
    if (this.serieOrMovie == 0) {
      this.som = 'Pelicula';
    }
    else {
      this.som = 'Serie';
    }

  }

}
