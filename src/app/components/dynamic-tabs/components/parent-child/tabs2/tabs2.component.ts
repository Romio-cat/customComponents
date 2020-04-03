import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { Tab2Component } from '../tab2/tab2.component';

@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs2.component.html',
  styleUrls: ['./tabs2.component.scss']
})
export class Tabs2Component implements AfterContentInit  {
  @ContentChildren(Tab2Component) public tabs: QueryList<Tab2Component>;

  public ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tabItem) => tabItem.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  public selectTab(tab: Tab2Component): void {
    this.tabs.toArray().forEach((tabItem) => tabItem.active = false);
    tab.active = true;
  }
}
