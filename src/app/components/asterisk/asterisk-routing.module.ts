import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsteriskExampleComponent } from './asterisk-example/asterisk-example.component';

const routes: Routes = [
  { path: '', component: AsteriskExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsteriskRoutingModule { }
