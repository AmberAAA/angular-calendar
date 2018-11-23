import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../module';

@Component({
  selector: 'app-todo-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  todoList: Todo[] = [];

  constructor(private serve: TodoService) {
    this.serve.todoList$.subscribe(data => this.todoList = data);
  }

  ngOnInit() {
    console.log('111');
    this.serve.getToDoList();
  }

  save (title) {
    const payload: Todo = {
      title,
      owner: '安博荣',
      list: []
    };

    this.serve.addToDoList(payload);

  }
}
