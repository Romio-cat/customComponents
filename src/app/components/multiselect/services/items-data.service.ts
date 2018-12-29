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
    { title: 'first', selected: false },
    { title: 'second', selected: false },
    { title: 'third', selected: false },
    { title: 'forth', selected: false },
    { title: 'fifth', selected: false },
    { title: 'sixth', selected: false },
    { title: 'seventh', selected: false },
  ];
}
