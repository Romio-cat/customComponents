import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProceduresComponent } from '../procedures.component';

const proceduresRoutes: Routes = [
  { path: '', component: ProceduresComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(proceduresRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class ProceduresRoutingModule { }
