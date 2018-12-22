import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {Procedure} from '../../procedure';
import { getPager } from '../../helpers/pager';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-procedures-pagination',
  templateUrl: './procedures-pagination.component.html',
  styleUrls: ['./procedures-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProceduresPaginationComponent implements OnInit, OnChanges {
  @Input() procedures: Procedure[];
  @Output() setItems = new EventEmitter<Procedure[]>();

  public pager: any = {};
  public pageSize = [13, 26, 32];
  public currentPageSize: number = this.pageSize[0];
  public pagedProcedures: Procedure[];

  constructor(private changeDetectionRef: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.procedures = changes.procedures.currentValue;
    // this.setPage(this.pager.currentPage);
    // console.log(this.procedures);
  }

  ngOnInit(): void {
    this.setPage(1);
    // console.log(this.procedures);
  }

  public setPageSize(size: number): void {
    this.currentPageSize = size;
    this.setPage(this.pager.currentPage);
  }

  public setPage(page: number = 1): void {
    this.pager = getPager(this.procedures.length, page, this.currentPageSize);
    this.setPagedProcedure(this.pager.startIndex, this.pager.endIndex + 1);
    this.getPagedProcedure();
  }

  public setPagedProcedure(start, end): void {
    // console.log(this.procedures);
    this.pagedProcedures = this.procedures.slice(start, end);
    // console.log(this.pagedProcedures);
  }

  public getPagedProcedure(): void {
    // console.log(this.pagedProcedures);
    this.setItems.emit(this.pagedProcedures);
  }
}
