import { Component, Input } from '@angular/core';
import { Tabs1Component } from '../tabs1/tabs1.component';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component {
  @Input() tabTitle: string;
  @Input() active: boolean;

  constructor(private tabs: Tabs1Component) {
    tabs.addTab(this);
  }
}
