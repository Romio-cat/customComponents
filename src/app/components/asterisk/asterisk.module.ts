import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsteriskRoutingModule } from './asterisk-routing.module';
import { AsteriskExampleComponent } from './asterisk-example/asterisk-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AsteriskDirective } from './directives/asterisk.directive';

@NgModule({
  declarations: [AsteriskExampleComponent, AsteriskDirective],
  imports: [
    CommonModule,
    AsteriskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [AsteriskExampleComponent]
})
export class AsteriskModule { }
