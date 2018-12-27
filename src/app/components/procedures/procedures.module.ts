import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProcedureDataService } from '../../services/procedure-data.service';

import { ProcedureDetailComponent } from './procedures-list/procedure-detail/procedure-detail.component';
import { ProceduresPaginationComponent } from './procedures-pagination/procedures-pagination.component';
import { ProceduresSearchComponent } from './procedures-search/procedures-search.component';
import { ProceduresListComponent } from './procedures-list/procedures-list.component';
import { ProceduresComponent } from './procedures.component';

@NgModule({
  declarations: [
    ProceduresComponent,
    ProceduresListComponent,
    ProceduresSearchComponent,
    ProceduresPaginationComponent,
    ProcedureDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProceduresComponent,
  ],
  providers: [
    ProcedureDataService,
  ],
})
export class ProceduresModule { }
