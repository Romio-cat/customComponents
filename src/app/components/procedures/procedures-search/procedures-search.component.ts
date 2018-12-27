import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
