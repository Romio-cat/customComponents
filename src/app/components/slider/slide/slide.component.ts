import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @Input() sliders: string[];
  @Input() slide: string;
  @Input() slideIndex: number;
  @Input() current: number;

  constructor() { }

  ngOnInit() {
  }
}
