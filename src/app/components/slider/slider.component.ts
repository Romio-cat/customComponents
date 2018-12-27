import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public sliders: string[] = [
    'first slider',
    'second slider',
    'third slider',
    'forth slider',
  ];
  private width = 600;
  public current = 0;
  public total = this.sliders.length;
  public currentTransition: number[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.total; i++) {
      this.currentTransition[i] = 0;
    }

    this.currentTransition[this.total - 1] = -this.width * this.total;
  }

  public inc(): void {
    let moved = this.current - 1;
    this.current = (this.current < this.total - 1) ? this.current + 1 : 0;

    moved = moved < 0 ? this.total - 1 : moved;

    for (let i = 0; i < this.total; i++) {
      this.currentTransition[i] = this.currentTransition[i] - this.width;
    }

    this.currentTransition[moved] = this.currentTransition[moved] + this.width * this.total;

    // console.log('current =  ', this.current);
    // console.log('moved =  ', moved);
    // console.log(this.currentTransition);
  }

  public dec(): void {
    this.current = (this.current > 0 ) ? this.current - 1 : this.total - 1;
    let moved = this.current - 1;

    moved = (moved < 0) ? this.total - 1 : moved;

    for (let i = 0; i < this.total; i++) {
      this.currentTransition[i] = this.currentTransition[i] + this.width;
    }

    this.currentTransition[moved] = this.currentTransition[moved] - this.width * this.total;

    // console.log('current = ' + this.current);
    // console.log('moved = ' + moved);
    // console.log(this.currentTransition);
  }

  public showSlide(index) {
    let diff = index - this.current;
    let moved;

    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        moved = this.current - 1;
        this.current++;
        this.current = (this.current > this.total - 1) ? 0 : this.current;

        moved = moved < 0 ? this.total - 1 : moved;

        for (let j = 0; j < this.total; j++) {
          this.currentTransition[j] = this.currentTransition[j] - this.width;
        }

        this.currentTransition[moved] = this.currentTransition[moved] + this.width * this.total;
      }
    } else {
      diff = Math.abs(diff);

      for (let i = 0; i < diff; i++) {
        this.current--;
        this.current = this.current < 0 ? 0 : this.current;
        moved = this.current - 1;

        moved = (moved < 0) ? this.total - 1 : moved;

        for (let j = 0; j < this.total; j++) {
          this.currentTransition[j] = this.currentTransition[j] + this.width;
        }

        this.currentTransition[moved] = this.currentTransition[moved] - this.width * this.total;
      }
    }

  }
}
