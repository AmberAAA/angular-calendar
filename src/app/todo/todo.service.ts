import { Injectable } from '@angular/core';
import {Todo} from './module';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {select, Store} from '@ngrx/store';
import { SetTodoList } from './todo.actions';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthActionTypes} from '../auth/auth.actions';
import { environment } from '../../environments/environment';

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
    this.http.get(`${environment.host}/api/todo?id=安博荣`).subscribe((data: {data: Todo[]}) => {
      this.store.dispatch(new SetTodoList(<Todo[]>(data.data)));
    });
  }

  addToDoList (payload: Todo) {
    this.http.post(`${environment.host}/api/todo`, payload, httpOptions)
      .subscribe((data: {data: Todo}) => {
        this.todoList.push(data.data);
        this.store.dispatch(new SetTodoList(<Todo[]>(this.todoList)));
      });
  }

  deleteTodo (payload: string) {
    this.http.delete(`${environment.host}/api/todo?_id=${payload}`, httpOptions)
      .subscribe((data: {state: number}) => {
        if (data.state === 0) {
          const newList = this.todoList.filter(item => item._id !== payload);
          this.store.dispatch(new SetTodoList(newList));
        }
      });
  }
}
