import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output, SimpleChange, SimpleChanges
} from '@angular/core';
import {Procedure} from '../../procedure';

@Component({
  selector: 'app-procedures-list',
  templateUrl: './procedures-list.component.html',
  styleUrls: ['./procedures-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProceduresListComponent implements OnInit, OnChanges {
  @Input() pagedProcedures: Procedure[];
  @Output() onSort = new EventEmitter();

  constructor(private changeDetectionRef: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.pagedProcedures);
    // console.log(this.pagedProcedures);
  }

  ngOnInit() {
    this.changeDetectionRef.detectChanges();
  }

  public titleSort(): void {
    this.onSort.emit();
    this.changeDetectionRef.detectChanges();
  }

  public trackByFn(index, item) {
    return index;
  }
}
