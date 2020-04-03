import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import { Person } from '../../../models/person';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  public personForm: FormGroup;

  @Input() public person: Person;
  @Output() public savePerson = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      id: '',
      name: '',
      surname: '',
      twitter: ''
    });
  }

  public ngOnInit(): void {
    this.personForm.setValue({
      id: this.person.id || -1,
      name: this.person.name || '',
      surname: this.person.surname || '',
      twitter: this.person.twitter || ''
    });
  }

  get name(): AbstractControl {
    return this.personForm.get('name');
  }

  get surname(): AbstractControl {
    return this.personForm.get('surname');
  }

  public onPersonFormSubmit(): void {
    if (this.personForm.valid) {
      const dataModel = this.personForm.value;
      this.savePerson.emit(dataModel);
    } else {
      this.personForm.markAllAsTouched();
    }
  }
}
