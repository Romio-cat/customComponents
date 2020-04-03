import { Component, ElementRef, ViewChild } from '@angular/core';
import { TabsComponent } from './components/dynamic/tabs/tabs.component';
import { Person } from './models/person';

@Component({
  selector: 'app-dynamic-tabs',
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.scss']
})
export class DynamicTabsComponent {
  @ViewChild(TabsComponent, {static: true}) public tabsComponent: TabsComponent;
  @ViewChild('personEdit', {static: true}) public editPersonTemplate: ElementRef;
  @ViewChild('about', {static: true}) public aboutTemplate: ElementRef;

  public people: Person[] = [
    {
      id: 1,
      name: 'Juri',
      surname: 'Strumpflohner',
      twitter: '@juristr'
    }
  ];

  public onEditPerson(person: Person): void {
    const personTab = this.tabsComponent.dynamicTabs.find((tabItem) => tabItem.dataContext.id === person.id);

    if (personTab) {
      this.tabsComponent.selectTab(personTab);
    } else {
      this.tabsComponent.openTab(
        `Editing ${person.name}`,
        this.editPersonTemplate,
        person,
        true
      );
    }
  }

  public onAddPerson(): void {
    this.tabsComponent.openTab('New person', this.editPersonTemplate, {}, true);
  }

  public onPersonFormSubmit(data: Person): void {
    if (data.id > 0) {
      this.people = this.people.map((person: Person) => {
        if (person.id === data.id) {
          return data;
        } else {
          return person;
        }
      });
    } else {
      data.id = Math.round(Math.random() * 100);
      this.people.push(data);
    }

    this.tabsComponent.closeActiveTab();
  }

  public onOpenAbout(): void {
    const aboutTab = this.tabsComponent.dynamicTabs.find((tabItem) => tabItem.dataContext.id === 'about');

    if (aboutTab) {
      this.tabsComponent.selectTab(aboutTab);
    } else {
      this.tabsComponent.openTab(
        `About`,
        this.aboutTemplate,
        {id: 'about'},
        true
      );
    }
  }
}
