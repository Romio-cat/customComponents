import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() public tabTitle: string;
  @Input() public active: boolean;
  @Input() public template;
  @Input() public dataContext;
  @Input() public isCloseable: boolean;
}
