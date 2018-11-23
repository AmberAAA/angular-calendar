import { Injectable } from '@angular/core';
import {Todo} from './module';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import { GetTodoList } from './todo.actions';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthActionTypes} from '../auth/auth.actions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':  'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient,
    private store: Store<any>
  ) {
    this.todoList$ = this.store.pipe(select('todo', 'todoList'));
    this.todoList$.subscribe((data) => this.todoList = data);
  }

  todoList$: Observable<Todo[]>;

  todoList: Todo[];

  getToDoList () {
    this.http.get('http://127.0.0.1:8080/api/todo?id=安博荣').subscribe((data: {data: Todo[]}) => {
      this.store.dispatch(new GetTodoList(<Todo[]>(data.data)));
    });
  }

  addToDoList (payload: Todo) {
    this.http.post('http://127.0.0.1:8080/api/todo', payload, httpOptions)
      .subscribe((data: {data: Todo}) =>{
        this.todoList.push(data.data);
        this.store.dispatch(new GetTodoList(<Todo[]>(this.todoList)));
      });
  }
}
