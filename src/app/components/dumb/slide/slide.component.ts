import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit, OnChanges {
  // @Input() sliders: string[];
  // @Input() slide: string;
  // @Input() slideIndex: number;
  // @Input() counter: number;

  constructor() { }

  ngOnChanges() {
    // console.log(this.counter);
    // console.log(this.slideIndex === this.counter);
  }

  ngOnInit() {
  }

}
