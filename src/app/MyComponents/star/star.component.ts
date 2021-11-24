import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  cropWidth: number = 100;

  starClick(): void {
    console.log(` The rating ${this.rating} was clicked`);

    this.ratingClicked.emit(` The rating ${this.rating} was clicked`);
  }

  constructor() {}

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 160) / 5;
  }
}
