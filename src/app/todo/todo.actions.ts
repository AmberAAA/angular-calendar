import { Action } from '@ngrx/store';
import {Todo} from './module';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  SetTodoList = '[Todo] Set Todos',
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;
}

export class SetTodoList implements Action {
  readonly type = TodoActionTypes.SetTodoList;

  constructor (public payload: Todo[]) {}
}

export type TodoActions = LoadTodos | SetTodoList;
