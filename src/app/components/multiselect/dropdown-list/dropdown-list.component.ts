import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {
  @Input() dropdownList: Item[];
  @Output() changed = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  public onChange(event, id): void {
    this.changed.emit({ check: event.target.checked, id });
  }
}
