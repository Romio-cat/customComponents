import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss']
})
export class MaskComponent implements OnInit {
  public cardForm: FormGroup;

  public cardMask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(private _formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    this.cardForm = this._formBuilder.group({
      card: ['', Validators.pattern(/^[0-9]{16}$/)]
    });

    this.cardForm.controls.card.setValue('1234567890123456');
  }

  public submitState(value: string) {
    console.log('submitState', value);
  }

}
