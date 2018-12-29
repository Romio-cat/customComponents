import { Component, OnInit } from '@angular/core';
import { ItemsDataService } from './services/items-data.service';
import { Observable } from 'rxjs/index';
import { Item } from './item';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  public dropdownList$: Observable<Item[]>;
  public selectedItems: Item[] = [];
  public isOpen = false;

  constructor(private itemsDataService: ItemsDataService) { }

  ngOnInit() {
    this.dropdownList$ = this.itemsDataService.getItems();
    // this.itemsDataService.getItems()
    //   .pipe(map((x: Item[]) => x.filter((y: Item) => y.selected)))
    //   .subscribe((res: Item[]) => {
    //     this.selectedItems = res;
    // });
    // console.log(this.selectedItems);
  }

  public onChanged(event): void {
    this.dropdownList$
      .pipe(
        map((x: Item[]) => {
          x.forEach((item: Item, index: number) => {
            item.selected = event.index === index ? event.check : item.selected;
          });
          // console.log(x);
          return x.filter((y: Item) => y.selected);
        }),
      )
      .subscribe((res: Item[]) => {
        this.selectedItems = res;
      });
    // console.log(this.selectedItems);
  }

  public deleteItem(element: number): void {
    this.dropdownList$
      .pipe(
        map((x: Item[]) => {
          x.forEach((item: Item, index: number) => {
            item.selected = element === index ? false : item.selected;
          });
          // console.log(x);
          return x.filter((y: Item) => y.selected);
        }),
      )
      .subscribe((res: Item[]) => {
        this.selectedItems = res;
      });

    // console.log(this.selectedItems);
  }

  public open(): void {
    this.isOpen = !this.isOpen;
  }
}
