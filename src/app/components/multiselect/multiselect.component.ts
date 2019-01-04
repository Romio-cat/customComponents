import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemsDataService } from './services/items-data.service';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  Subscription,
  throwError,
} from 'rxjs/index';
import { Item } from './item';
import {
  catchError,
  distinctUntilChanged,
  map,
} from 'rxjs/internal/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiselectComponent implements OnInit {
  private mySet = new Set<Item>();
  public dropdownList$: Observable<Item[]>;
  public selectedItems$: Subscription;
  public selectedItems: Item[] = [];
  public searchItem$ = new BehaviorSubject<string>('');
  public isOpen = false;
  public form: FormGroup;

  constructor(private itemsDataService: ItemsDataService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.dropdownList$ = combineLatest(this.searchItem$, this.itemsDataService.getItems())
      .pipe(
        distinctUntilChanged(),
        map(([searchValue, items]) => {
          return items.filter((item: Item) => {
            if (~item.title.indexOf(searchValue)) {
              return item;
            }
          });
        }),
        catchError(error => throwError(error)),
      );

    this.form = this.fb.group({
      item: ['', Validators.required],
    });

    this.form.get('item').valueChanges.subscribe(
      (data: string) => {
        this.isOpen = true;
        this.selectedItems = Array.from(this.mySet).sort(this.compareTitleDown);
        this.searchItem$.next(data);
      }
    );
  }

  public onChanged(event): void {
    this.selectedItems$ = this.dropdownList$.pipe(
      map((items: Item[]) => {
        items.forEach((item: Item) => {
          if (event.id === item.id) {
            item.selected = event.check;
            if (!event.check) {
              this.mySet.delete(item);
            }
          }
        });
        event.id = null;
        return items.filter((item: Item) => item.selected);
      }),
      catchError(error => throwError(error)),
    ).subscribe((items: Item[]) => items.forEach(item => this.mySet.add(item)));

    this.selectedItems = Array.from(this.mySet).sort(this.compareTitleDown);
  }

  public deleteItem(id: number): void {
    let deletedItem: Item;

    this.selectedItems.forEach((item: Item) => {
      if (item.id === id) {
        deletedItem = item;
        deletedItem.selected = false;
        this.mySet.delete(deletedItem);
      }
    });

    this.selectedItems = Array.from(this.mySet).sort(this.compareTitleDown);
  }

  public backspace() {
    if (!this.searchItem$.getValue() && this.mySet.size) {
      const lastItem = this.selectedItems.slice(-1)[0];

      lastItem.selected = false;
      this.mySet.delete(lastItem);
      this.selectedItems = Array.from(this.mySet).sort(this.compareTitleDown);
    } else if (!this.mySet.size) {
      this.isOpen = false;
    }
  }

  public open(): void {
    this.isOpen = !this.isOpen;
  }

  public clickOutside(event): void {
    this.form.get('item').setValue('');
    this.isOpen = event;
  }

  private compareTitleDown(a: Item, b: Item) {
    return a.id - b.id;
  }
}
