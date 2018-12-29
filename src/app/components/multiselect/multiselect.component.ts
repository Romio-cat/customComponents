import { Component, OnInit } from '@angular/core';
import { ItemsDataService } from './services/items-data.service';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  public dropdownList: Observable<string[]>;
  public selectedItems: string[] = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
  ];

  constructor(private itemsDataService: ItemsDataService) { }

  ngOnInit() {
    this.dropdownList = this.itemsDataService.getItems();
  }

  public deleteItem(index): void {
    this.selectedItems.splice(index, 1);
  }

}
