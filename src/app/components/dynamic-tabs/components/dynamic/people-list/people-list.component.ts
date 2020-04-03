import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../../models/person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent {
  @Input() public people: Person[];
  @Output() public addPerson = new EventEmitter<any>();
  @Output() public editPerson = new EventEmitter<any>();
}
