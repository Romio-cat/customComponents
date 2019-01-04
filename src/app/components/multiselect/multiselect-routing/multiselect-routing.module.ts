import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MultiselectComponent } from '../multiselect.component';

const multiselectRoutes: Routes = [
  { path: '', component: MultiselectComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(multiselectRoutes),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class MultiselectRoutingModule { }
