import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

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
