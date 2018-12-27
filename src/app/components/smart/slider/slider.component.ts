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
    // console.log('% ' + this.counter % this.total);
    // console.log('count ' + this.counter);
    // console.log('amount ' + this.amount);

    for (let i = 0; i < this.total; i++) {
      this.currentTransition[i] = 0;
    }

    this.currentTransition[this.total - 1] = -500 * (this.total);

    console.log(this.currentTransition);
  }

  public inc(): void {
    let outerIndex = this.counter - 1;
    this.counter = (this.counter < this.total - 1) ? this.counter + 1 : 0;

    outerIndex = outerIndex < 0 ? this.total - 1 : outerIndex;

    for (let i = 0; i < this.total; i++) {
      this.currentTransition[i] = this.currentTransition[i] - 500;
    }
    console.log('outerIndex =  ', outerIndex);
    console.log('counter =  ', this.counter);
    this.currentTransition[outerIndex] = this.currentTransition[outerIndex] + 500 * (this.total);

    console.log(this.currentTransition);

    // console.log('% ' + this.counter % this.total);
    // console.log('count ' + this.counter);
    // console.log('amount ' + this.amount);
  }

  public dec(): void {
    // const outerIndex = (this.counter - 1) % this.total;
    // this.counter = (this.counter > 0 ) ? this.counter - 1 : this.total - 1;
    // // this.amount = (this.amount > this.counter) ? this.counter - 2 : this.counter - 1;
    //
    // for (let i = 0; i < this.total; i++) {
    //   this.currentTransition[i] = this.currentTransition[i] + 500;
    // }
    //
    // console.log(this.counter - 1 < 0 ? this.total - 1 : this.counter);
    // this.currentTransition[outerIndex] = this.currentTransition[outerIndex] + 500 * this.total;
    // this.currentTransition[this.counter - 1 < 0 ? this.total - 1 : this.counter] -= 500 * this.total;
    // console.log('% ' + this.counter % this.total);
    // console.log('count ' + this.counter);
    // console.log('amount ' + this.amount);
  }



}
