import {Component, Input, OnInit} from '@angular/core';
import {Procedure} from '../../procedure';

@Component({
  selector: 'app-procedure-detail',
  templateUrl: './procedure-detail.component.html',
  styleUrls: ['./procedure-detail.component.scss']
})
export class ProcedureDetailComponent implements OnInit {
  @Input() procedure: Procedure;

  constructor() { }

  ngOnInit() {
  }

}
