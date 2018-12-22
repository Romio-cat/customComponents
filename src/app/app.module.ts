import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material-module/material.module';

import { ProceduresComponent } from './smart/procedures/procedures.component';
import { ProceduresSearchComponent } from './smart/procedures-search/procedures-search.component';
import { ProceduresListComponent } from './smart/procedures-list/procedures-list.component';
import { ProceduresPaginationComponent } from './smart/procedures-pagination/procedures-pagination.component';

import { ProcedureDetailComponent } from './dumb/procedure-detail/procedure-detail.component';

import { ProcedureDataService } from './services/procedure-data.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProceduresComponent,
    ProceduresListComponent,
    ProceduresSearchComponent,
    ProceduresPaginationComponent,
    ProcedureDetailComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProcedureDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
