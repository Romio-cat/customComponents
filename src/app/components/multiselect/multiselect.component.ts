import { Component, OnInit } from '@angular/core';
import { ItemsDataService } from './services/items-data.service';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  throwError
} from 'rxjs/index';
import { Item } from './item';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap
} from 'rxjs/internal/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  public dropdownList$: Observable<Item[]>;
  public selectedItems$: Observable<Item[]>;
  public searchItem$ = new BehaviorSubject<string>('');
  public isOpen = false;
  public form: FormGroup;

  constructor(private itemsDataService: ItemsDataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.dropdownList$ = combineLatest(this.searchItem$, this.itemsDataService.getItems())
      .pipe(
        // debounceTime(100),
        distinctUntilChanged(),
        map(([searchValue, items]) => {
          return items.filter((item: Item) => {
            if (~item.title.indexOf(searchValue)) {
              // console.log(item);
              return item;
            }
          });
        }),
        catchError(error => throwError(error)),
      );

    // console.log(this.dropdownList$);

    this.form = this.fb.group({
      item: ['', Validators.required],
    });

    this.form.get('item').valueChanges.subscribe(
      (data: string) => {
        // console.log(data);
        this.isOpen = true;
        this.searchItem$.next(data);
      }
    );
  }

  public onChanged(event): void {
    console.log(event);
    this.selectedItems$ = this.dropdownList$
      .pipe(
        map((items: Item[]) => {
          items.forEach((item: Item) => {
            item.selected = event.id === item.id ? event.check : item.selected;
          });
          console.log('selected', items);
          return items.filter((item: Item) => {
            return item.selected;
          });
        }),
        catchError(error => throwError(error)),
      );

    // console.log(this.selectedItems$);

    // this.dropdownList$.subscribe(a => console.log('drop', a));
    // this.selectedItems$.subscribe(a => console.log('selected', a));
  }

  public deleteItem(id: number): void {
    this.selectedItems$ = this.dropdownList$
      .pipe(
        map((x: Item[]) => {
          x.forEach((item: Item) => {
            if (item.id === id) {
              item.selected = false;
              // console.log(item);
            }
          });
          // console.log(x);
          return x.filter((y: Item) => y.selected);
        }),
        catchError(error => throwError(error)),
      );
    // console.log(this.selectedItems$);
  }

  public open(): void {
    this.isOpen = !this.isOpen;
  }
}
