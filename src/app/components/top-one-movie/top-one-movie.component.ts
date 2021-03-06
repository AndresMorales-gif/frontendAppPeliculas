import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-one-movie',
  templateUrl: './top-one-movie.component.html',
  styleUrls: ['./top-one-movie.component.css']
})
export class TopOneMovieComponent implements OnInit {

  @Input() title: String;
  @Input() description: String;
  @Input() kind: String;
  @Input() image: String;
  @Input() serieOrMovie: number;
  @Input() launching: Date;

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
