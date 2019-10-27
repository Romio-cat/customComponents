import { Component } from '@angular/core';
import {DateService} from '../../services/date.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

  constructor(private dateService: DateService) { }

  public changeMonth(value: number): void {
    this.dateService.changeMonth(value);
  }

}
