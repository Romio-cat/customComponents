import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectComponent } from './multiselect.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { ItemsDataService } from './services/items-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MultiselectComponent,
  ],
  declarations: [MultiselectComponent, DropdownListComponent],
  providers: [ItemsDataService],
})
export class MultiselectModule { }
