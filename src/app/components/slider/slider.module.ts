import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide/slide.component';
import { SliderComponent } from './slider.component';
import { SliderRoutingModule } from './slider-routing/slider-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SliderRoutingModule,
  ],
  exports: [
    SliderComponent,
  ],
  declarations: [
    SliderComponent,
    SlideComponent,
  ],
})
export class SliderModule { }
