import { Action } from '@ngrx/store';
import {Todo} from './module';
import {TodoActionTypes} from './todo.actions';


export interface State {
  todoList: Todo[];
}

export const initialState: State = {
  todoList: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    case (TodoActionTypes.SetTodoList):
      return {
        ...state,
        // @ts-ignore
        todoList: action.payload
      };

    default:
      return state;
  }
}
