import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  private width = 600;
  public sliders: string[] = [
    'first slider',
    'second slider',
    'third slider',
    'forth slider',
  ];
  public current = 0;
  public total: number = this.sliders.length;
  public currentTransition: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initSlide();
  }

  public initSlide(): void {
    for (let i = 0; i < this.total; i++) {
      this.currentTransition[i] = 0;
    }

    this.currentTransition[this.total - 1] = -this.width * this.total;
  }

  public nextSlide(): void {
    let moved: number = this.current - 1;
    this.current = (this.current < this.total - 1) ? this.current + 1 : 0;

    moved = moved < 0 ? this.total - 1 : moved;

    for (let i = 0; i < this.total; i++) {
      this.currentTransition[i] = this.currentTransition[i] - this.width;
    }

    this.currentTransition[moved] = this.currentTransition[moved] + this.width * this.total;
  }

  public prevSlide(): void {
    this.current = (this.current > 0 ) ? this.current - 1 : this.total - 1;
    let moved: number = this.current - 1;

    moved = (moved < 0) ? this.total - 1 : moved;

    for (let i = 0; i < this.total; i++) {
      this.currentTransition[i] = this.currentTransition[i] + this.width;
    }

    this.currentTransition[moved] = this.currentTransition[moved] - this.width * this.total;

  }

  public showSlide(index: number): void {
    let diff: number = index - this.current;
    let moved: number;

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
