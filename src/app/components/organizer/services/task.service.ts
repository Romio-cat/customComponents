import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import * as moment from 'moment';

export interface Task {
  id?: string;
  title: 'string';
  date?: string;
}

interface Response {
  name: string;
}

@Injectable()
export class TaskService {
  baseUrl = 'https://angular-organizer-29dd2.firebaseio.com/';

  constructor(private http: HttpClient) { }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Response>(`${this.baseUrl}/${task.date}.json`, task)
      .pipe(map(res => {
        return {...task, id: res.name};
      }));
  }

  getTasks(date: moment.Moment): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/${date.format('DD-MM-YYYY')}.json`)
      .pipe(map(tasks => {
        if (!tasks) {
          return [];
        }

        return Object.keys(tasks).map(key => ({...tasks[key], id: key}));
      }));
  }

  deleteTask(task): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${task.date}/${task.id}.json`);
  }
}
