import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ContentChildren,
  QueryList,
  ViewChild,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { DynamicTabsDirective } from '../../../directives/dynamic-tabs.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  public dynamicTabs: TabComponent[] = [];
  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;
  @ViewChild(DynamicTabsDirective, {static: true}) public dynamicTabPlaceholder: DynamicTabsDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

  public ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tabItem) => tabItem.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  public selectTab(tab: TabComponent): void {
    this.tabs.toArray().forEach((tabItem) => tabItem.active = false);
    this.dynamicTabs.forEach((tabItem) => (tabItem.active = false));
    tab.active = true;
  }

  public openTab(title, template, data, isCloseable = false): void {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(TabComponent);
    const componentRef = this.dynamicTabPlaceholder.viewContainer.createComponent(componentFactory);
    const instance: TabComponent = <TabComponent>componentRef.instance;

    instance.tabTitle = title;
    instance.template = template;
    instance.dataContext = data;
    instance.isCloseable = isCloseable;

    this.dynamicTabs.push(instance);
    this.selectTab(instance);
  }

  public closeTab(tab: TabComponent): void {
    for (let i = 0; i < this.dynamicTabs.length; i++) {
      if (this.dynamicTabs[i] === tab) {
        this.dynamicTabs.splice(i, 1);
        this.dynamicTabPlaceholder.viewContainer.remove(i);
        this.selectTab(this.tabs.first);
        break;
      }
    }
  }

  public closeActiveTab(): void {
    const activeTabs = this.dynamicTabs.filter(tab => tab.active);

    if (activeTabs.length > 0) {
      this.closeTab(activeTabs[0]);
    }
  }
}
