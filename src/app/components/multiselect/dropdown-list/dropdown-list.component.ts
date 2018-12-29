import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {
  @Input() dropdownList: string[];

  constructor() { }

  ngOnInit() {
  }

}
