import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Procedure} from '../../procedure';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs/index';
import {catchError, debounceTime, distinctUntilChanged, map, tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-procedures-search',
  templateUrl: './procedures-search.component.html',
  styleUrls: ['./procedures-search.component.scss']
})
export class ProceduresSearchComponent implements OnInit {
  @Output() outputData: EventEmitter<string> = new EventEmitter();
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      procedure: ['', Validators.required],
    });

    this.form.get('procedure').valueChanges.subscribe(
      (data: string) => {
        this.outputData.emit(data);
      }
    );
  }
}
