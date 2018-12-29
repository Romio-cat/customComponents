import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';

@Injectable()
export class ItemsDataService {
  public dropdownList: string[] = [
    'first',
    'second',
    'third',
    'forth',
    'fifth',
    'sixth',
    'seventh',
  ];

  constructor() { }

  public getItems(): Observable<string[]> {
    return of(this.dropdownList);
  }
}
