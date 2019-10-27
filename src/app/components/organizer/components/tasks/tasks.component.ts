import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TaskService, Task} from '../../services/task.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  form: FormGroup;
  tasks: Task[] = [];

  constructor(private dateService: DateService, private taskService: TaskService) { }

  ngOnInit() {
    this.dateService.date$.pipe(
      switchMap(value => this.taskService.getTasks(value)))
      .subscribe(tasks => this.tasks = tasks);

    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  submit(): void {
    const { title } = this.form.value;
    const task: Task = {
      title,
      date: this.dateService.date$.value.format('DD-MM-YYYY'),
    };

    this.taskService.addTask(task)
      .subscribe(item => {
        this.tasks.push(item);
        this.form.reset();
      }, (err) => console.log(err));
  }

  remove(task: Task): void {
    this.taskService.deleteTask(task)
      .subscribe(() => {
        this.tasks = this.tasks.filter((item) => item.id !== task.id);
      }, error => console.log(error));
  }
}
