import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterialModule } from './material-module/material.module';

import { ProceduresModule } from './components/procedures/procedures.module';
import { SliderModule } from './components/slider/slider.module';
import { MultiselectModule } from './components/multiselect/multiselect.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ProceduresModule,
    SliderModule,
    MultiselectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
