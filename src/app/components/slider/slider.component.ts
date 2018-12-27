import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnChanges {
  public sliders: string[] = [
    'first slider',
    'second slider',
    'third slider',
    'forth slider',
  ];
  public counter = 0;
  public total = this.sliders.length;
  public currentTransition: number[] = [];

  constructor() { }

  ngOnChanges() {
  }

  ngOnInit() {
    for (let i = 0; i < this.total; i++) {
      this.currentTransition[i] = 0;
    }

    this.currentTransition[this.total - 1] = -500 * (this.total);

    // console.log(this.currentTransition);
  }

  public inc(): void {
    let outerIndex = this.counter - 1;
    this.counter = (this.counter < this.total - 1) ? this.counter + 1 : 0;

    outerIndex = outerIndex < 0 ? this.total - 1 : outerIndex;

    for (let i = 0; i < this.total; i++) {
      this.currentTransition[i] = this.currentTransition[i] - 500;
    }

    this.currentTransition[outerIndex] = this.currentTransition[outerIndex] + 500 * this.total;
    // console.log('outerIndex =  ', outerIndex);
    // console.log('counter =  ', this.counter);
    // console.log(this.currentTransition);
  }

  public dec(): void {
    this.counter = (this.counter > 0 ) ? this.counter - 1 : this.total - 1;
    let outerIndex = this.counter - 1;

    outerIndex = (outerIndex < 0) ? this.total - 1 : outerIndex;

    for (let i = 0; i < this.total; i++) {
      this.currentTransition[i] = this.currentTransition[i] + 500;
    }

    this.currentTransition[outerIndex] = this.currentTransition[outerIndex] - 500 * this.total;
    // console.log('count = ' + this.counter);
    // console.log('outerIndex = ' + outerIndex);
    // console.log(this.currentTransition);
  }

  public showSlide(index) {
    this.counter = index;
  }



}
