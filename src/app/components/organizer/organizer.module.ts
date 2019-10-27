import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizerRoutingModule } from './organizer-routing.module';
import { OrganizerComponent } from './components/organizer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { DateService } from './services/date.service';
import { MomentPipe } from './pipes/moment.pipe';
import { TaskService } from './services/task.service';
import * as moment from 'moment';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    OrganizerComponent,
    CalendarComponent,
    SelectorComponent,
    TasksComponent,
    MomentPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrganizerRoutingModule,
  ],
  providers: [DateService, TaskService]
})
export class OrganizerModule {
  constructor() {
    moment.locale('ru');
  }
}
