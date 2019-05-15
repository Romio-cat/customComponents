import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaskInputRoutingModule } from './mask-input-routing/mask-input-routing.module';
import { MaskInputComponent } from './mask-input/mask-input.component';
import { MaskComponent } from './mask/mask.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaskInputRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MaskInputComponent],
  declarations: [MaskInputComponent, MaskComponent]
})
export class MaskInputModule { }
