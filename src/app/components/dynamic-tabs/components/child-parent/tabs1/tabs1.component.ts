import { Component } from '@angular/core';
import { Tab1Component } from '../tab1/tab1.component';

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.component.html',
  styleUrls: ['./tabs1.component.scss']
})
export class Tabs1Component {
  public tabs: Tab1Component[] = [];

  public addTab(tab: Tab1Component): void {
    if (this.tabs.length === 0) {
      tab.active = true;
    }

    this.tabs.push(tab);
  }

  public selectTab(tab: Tab1Component): void {
    this.tabs.forEach((tabItem: Tab1Component) => tabItem.active = false);
    tab.active = true;
  }
}
