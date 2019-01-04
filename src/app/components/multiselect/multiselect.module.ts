import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectComponent } from './multiselect.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { ItemsDataService } from './services/items-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MultiselectRoutingModule } from './multiselect-routing/multiselect-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiselectRoutingModule,
  ],
  exports: [
    MultiselectComponent,
  ],
  declarations: [
    MultiselectComponent,
    DropdownListComponent,
    ClickOutsideDirective,
  ],
  providers: [ItemsDataService],
})
export class MultiselectModule { }
