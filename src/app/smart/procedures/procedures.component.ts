import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {Procedure} from '../../procedure';
import {ProcedureDataService} from '../../services/procedure-data.service';
import {BehaviorSubject, combineLatest, from, Observable, of, Subscription, throwError} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProceduresComponent implements OnInit {
  // public _procedures$: Observable<Procedure[]>;
  // public paginationProcedures$ = new BehaviorSubject<Procedure[]>([]);
  // public paginationProcedures: Procedure[];
  public pagedProcedures$: Observable<Procedure[]>;
  public pagedProcedures: Procedure[];
  private isTitleSorted = false;
  private searchResult$ = new BehaviorSubject<string>('');
  public procedures$: Observable<Procedure[]>;

  constructor(private procedureDataService: ProcedureDataService,
              private changeDetectionRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.procedures$ = this.procedureDataService.getProcedures();
  }

  setItems(pagedProcedures: Procedure[]): void {
    // console.log(pagedProcedures);
    this.pagedProcedures$ = of(pagedProcedures);
    // this.pagedProcedures = pagedProcedures;
    // this.pagedProcedures$.subscribe(
    //   (procedures: Procedure[]) => console.log(procedures),
    // );
  }

  searchProcedure(searchString$: string): void {
    this.searchResult$.next(searchString$);
  //   // this.procedures$ = combineLatest(this.searchResult$, this.procedures$)
  //   //   .pipe(
  //   //     // debounceTime(300),
  //   //     distinctUntilChanged(),
  //   //     map(([searchValue, procedures]) => {
  //   //       return procedures.filter((item: Procedure) => {
  //   //         if (~item.title.indexOf(searchValue)) {
  //   //           return item;
  //   //         }
  //   //       });
  //   //     }),
  //   //     catchError(error => throwError(error)),
  //   //   );
  }

  onSort(): void {
    // this.procedures$.pipe(
    //   map(),
    // );
  }

  public titleSort(): Procedure[] {
    let sortProcedures: Procedure[];
    this.isTitleSorted = !this.isTitleSorted;
    // this.searchProcedures$.subscribe(procedures => sortProcedures = procedures);

    // console.log(sortProcedures);

    return !this.isTitleSorted
      ? sortProcedures.sort(this.compareTitleDown)
      : sortProcedures.sort(this.compareTitleUp);
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
