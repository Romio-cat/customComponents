import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatListModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
  ],
  exports: [
    MatListModule,
    MatTableModule,
    MatCardModule,
  ],
  declarations: []
})
export class MaterialModule { }
