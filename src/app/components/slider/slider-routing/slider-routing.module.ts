import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from '../slider.component';

const sliderRoutes: Routes = [
  { path: '', component: SliderComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sliderRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class SliderRoutingModule { }
