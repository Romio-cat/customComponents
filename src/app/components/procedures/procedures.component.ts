import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Procedure} from './procedure';
import {ProcedureDataService} from './services/procedure-data.service';
import {BehaviorSubject, combineLatest, Observable, throwError} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProceduresComponent implements OnInit {
  private procedures$: Observable<Procedure[]>;
  private sort$ = new BehaviorSubject<Boolean>(false);
  private searchResult$ = new BehaviorSubject<string>('');
  public paginationProcedures$: Observable<Procedure[]>;
  public pagedProcedures$ = new BehaviorSubject<Procedure[]>([]);

  constructor(private procedureDataService: ProcedureDataService) {
  }

  ngOnInit(): void {
    this.procedures$ = this.procedureDataService.getProcedures();

    this.paginationProcedures$ = combineLatest(this.searchResult$, this.sort$, this.procedures$)
      .pipe(
        // debounceTime(300),
        distinctUntilChanged(),
        map(([searchValue, sorted, procedures]) => {
          return procedures.filter((item: Procedure) => {
            if (~item.title.indexOf(searchValue)) {
              return item;
            }
          }).sort(sorted ? this.compareTitleUp : this.compareTitleDown);
        }),
        catchError(error => throwError(error)),
      );
  }

  searchProcedure(searchString$: string): void {
    this.searchResult$.next(searchString$);
  }

  onSort(): void {
    this.sort$.next(!this.sort$.getValue());
  }

  private compareTitleDown(a: Procedure, b: Procedure) {
    const prev: any = a.title.match(/\d+/g);
    const next: any = b.title.match(/\d+/g);
    return prev - next;
  }

  private compareTitleUp(a: Procedure, b: Procedure) {
    const prev: any = a.title.match(/\d+/g);
    const next: any = b.title.match(/\d+/g);
    return next - prev;
  }
}
