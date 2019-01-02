import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';
import { delay } from 'rxjs/internal/operators';
import { Item } from '../item';

@Injectable()
export class ItemsDataService {

  constructor() { }

  public getItems(term: string = null): Observable<Item[]> {
    let items = getMockItems();
    if (term) {
      items = items.filter(x => x.title.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items);
  }

  // public getItems(): Observable<string[]> {
  //   return of(this.dropdownList);
  // }
}

function getMockItems(): Item[] {
  return [
    { id: 0, title: 'first', selected: false },
    { id: 1, title: 'second', selected: false },
    { id: 2, title: 'third', selected: false },
    { id: 3, title: 'forth', selected: false },
    { id: 4, title: 'fifth', selected: false },
    { id: 5, title: 'sixth', selected: false },
    { id: 6, title: 'seventh', selected: false },
  ];
}
