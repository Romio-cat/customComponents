import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {Procedure} from '../procedure';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-procedures-list',
  templateUrl: './procedures-list.component.html',
  styleUrls: ['./procedures-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProceduresListComponent {
  @Input() pagedProcedures: BehaviorSubject<Procedure[]>;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSort = new EventEmitter();

  public titleSort(): void {
    this.onSort.emit();
  }

  public trackByFn(index) {
    return index;
  }
}
