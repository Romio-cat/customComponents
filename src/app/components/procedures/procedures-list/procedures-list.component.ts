import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {Procedure} from '../procedure';

@Component({
  selector: 'app-procedures-list',
  templateUrl: './procedures-list.component.html',
  styleUrls: ['./procedures-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProceduresListComponent implements OnInit, OnChanges {
  @Input() pagedProcedures: Procedure[];
  @Output() onSort = new EventEmitter();

  constructor() {
  }

  ngOnChanges() {
    // console.log(this.pagedProcedures);
  }

  ngOnInit() {
  }

  public titleSort(): void {
    this.onSort.emit();
  }

  public trackByFn(index, item) {
    return index;
  }
}
