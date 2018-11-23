import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {mergeMap} from 'rxjs/operators';
import {TodoActionTypes} from './todo.actions';
import {TodoService} from './todo.service';


@Injectable()
export class TodoEffects {

  // @Effect()
  // getTodoList$: Observable<Action> = this.actions$.pipe(
  //   ofType(TodoActionTypes.GetTodoList),
  //   mergeMap(() => this.serve.getToDoList())
  // );

  constructor(private actions$: Actions,
              private serve: TodoService) {}
}
