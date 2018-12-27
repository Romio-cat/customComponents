import {
  ChangeDetectionStrategy,
  Component,
  Input, OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {Procedure} from '../../../procedure';
import { getPager } from '../../../helpers/pager';
import {BehaviorSubject} from 'rxjs/index';

@Component({
  selector: 'app-procedures-pagination',
  templateUrl: './procedures-pagination.component.html',
  styleUrls: ['./procedures-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProceduresPaginationComponent implements OnInit, OnChanges {
  @Input() procedures: Procedure[];
  @Input() pagedProcedures$: BehaviorSubject<Procedure[]>;

  private pager: any = {};
  public pageSize = [13, 26, 32];
  public currentPageSize: number = this.pageSize[0];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setPage(this.pager.currentPage);
  }

  ngOnInit(): void {
    this.setPage(1);
  }

  public setPageSize(size: number): void {
    this.currentPageSize = size;
    this.setPage(this.pager.currentPage);
  }

  public setPage(page: number = 1): void {
    this.pager = getPager(this.procedures.length, page, this.currentPageSize);
    this.setPagedProcedure(this.pager.startIndex, this.pager.endIndex + 1);
  }

  public setPagedProcedure(start, end): void {
    this.pagedProcedures$.next(this.procedures.slice(start, end));
  }

}
