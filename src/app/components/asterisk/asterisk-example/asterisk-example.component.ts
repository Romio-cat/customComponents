import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-asterisk-example',
  templateUrl: './asterisk-example.component.html',
  styleUrls: ['./asterisk-example.component.scss']
})
export class AsteriskExampleComponent implements OnInit {
  public astForm: FormGroup;

  ngOnInit() {
    this.astForm = new FormGroup({
      inputControl: new FormControl('')
    });
  }

  public submit(): void {
    console.log(this.astForm.getRawValue());
  }

}
