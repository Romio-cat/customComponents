import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProcedureDataService } from './services/procedure-data.service';

import { ProcedureDetailComponent } from './procedures-list/procedure-detail/procedure-detail.component';
import { ProceduresPaginationComponent } from './procedures-pagination/procedures-pagination.component';
import { ProceduresSearchComponent } from './procedures-search/procedures-search.component';
import { ProceduresListComponent } from './procedures-list/procedures-list.component';
import { ProceduresComponent } from './procedures.component';
import { ProceduresRoutingModule } from './procedures-routing/procedures-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProceduresRoutingModule,
  ],
  exports: [
    ProceduresComponent,
  ],
  declarations: [
    ProceduresComponent,
    ProceduresListComponent,
    ProceduresSearchComponent,
    ProceduresPaginationComponent,
    ProcedureDetailComponent,
  ],
  providers: [
    ProcedureDataService,
  ],
})
export class ProceduresModule { }
