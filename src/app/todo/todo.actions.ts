import { Action } from '@ngrx/store';
import {Todo} from './module';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  GetTodoList = '[Todo] Load Todos'
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;
}

export class GetTodoList implements Action {
  readonly type = TodoActionTypes.GetTodoList;

  constructor (public payload: Todo[]) {}
}


export type TodoActions = LoadTodos | GetTodoList;
