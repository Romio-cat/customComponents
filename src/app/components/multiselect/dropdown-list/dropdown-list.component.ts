import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Item } from '../item';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit, OnChanges {
  @Input() dropdownList: Item[];
  @Output() onChanged = new EventEmitter<object>();

  constructor() { }

  ngOnChanges() {
    // console.log(this.dropdownList);
  }

  ngOnInit() {
  }

  public onChange(event, index: number): void {
    this.onChanged.emit({ check: event.target.checked, index });
    // console.log(this.dropdownList);
    // console.log(event.path);
  }

  // public clickOut(event) {
  //   console.log(event);
  // }
}
