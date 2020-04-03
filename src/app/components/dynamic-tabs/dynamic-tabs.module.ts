import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTabsRoutingModule } from './routing/dynamic-tabs-routing.module';
import { DynamicTabsComponent } from './dynamic-tabs.component';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicTabsDirective } from './directives/dynamic-tabs.directive';
import { Tabs1Component } from './components/child-parent/tabs1/tabs1.component';
import { Tab2Component } from './components/parent-child/tab2/tab2.component';
import { Tab1Component } from './components/child-parent/tab1/tab1.component';
import { Tabs2Component } from './components/parent-child/tabs2/tabs2.component';
import { TabsComponent } from './components/dynamic/tabs/tabs.component';
import { TabComponent } from './components/dynamic/tab/tab.component';
import { PersonEditComponent } from './components/dynamic/person-edit/person-edit.component';
import { PeopleListComponent } from './components/dynamic/people-list/people-list.component';
import { AsteriskModule } from '../asterisk/asterisk.module';

@NgModule({
  declarations: [
    DynamicTabsComponent,
    DynamicTabsDirective,
    Tabs1Component,
    Tab1Component,
    Tabs2Component,
    Tab2Component,
    TabsComponent,
    TabComponent,
    PersonEditComponent,
    PeopleListComponent,
  ],
  imports: [
    CommonModule,
    DynamicTabsRoutingModule,
    ReactiveFormsModule,
    AsteriskModule
  ],
  entryComponents: [TabComponent]
})
export class DynamicTabsModule { }
