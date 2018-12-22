import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatTableModule,
  ],
  exports: [
    MatListModule,
    MatTableModule,
  ],
  declarations: []
})
export class MaterialModule { }
