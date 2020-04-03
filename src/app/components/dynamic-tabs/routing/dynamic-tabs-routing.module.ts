import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicTabsComponent } from '../dynamic-tabs.component';

const routes: Routes = [
  { path: '', component: DynamicTabsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicTabsRoutingModule { }
