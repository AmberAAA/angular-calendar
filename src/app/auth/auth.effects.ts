import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {catchError, filter, map, mergeMap} from 'rxjs/operators';
import { AuthActionTypes } from './auth.actions';
import {State} from './auth.reducer';
import { environment } from '../../environments/environment';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':  'application/json' })
};

@Injectable()
export class AuthEffects {

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    mergeMap(action =>
      // @ts-ignore
      this.http.get(`${environment.host}/api/login`, {params: action.payload}).pipe(
        map((data: {state: number, data: {}}) => {
          if ( data.state === 0 ) {
            return { type: AuthActionTypes.LoginSuccess, payload: data.data };
          } else if ( data.state === 1 ) {
            return { type: AuthActionTypes.LoginFailed, payload: '账号或密码错误！' };
          } else {
            return { type: AuthActionTypes.LoginFailed, payload: '服务器错误！' };
          }
        }),
        catchError( e => of({type: AuthActionTypes.LoginFailed, payload: '服务器错误！'}))
      )
    ),
  );

  @Effect()
  signUp$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.SignUp),
    mergeMap((action: Action) =>
      // @ts-ignore
      this.http.post(`${environment.host}/api/login`, action.payload, httpOptions).pipe(
        map((data: { state: number, data: any, message: string }) => {
          if ( data.state === 0 ) {
            return { type: AuthActionTypes.LoginSuccess, payload: data.data };
          } else {
            return { type: AuthActionTypes.LoginFailed, payload: data.message };
          }
        })
      )
    )
  );

  @Effect()
  padding_on$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.Login, AuthActionTypes.SignUp),
    mergeMap(() => of({type: AuthActionTypes.LoginPadding, payload: true}))
  );

  @Effect()
  padding_off$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess, AuthActionTypes.LoginFailed),
    mergeMap(() => of({type: AuthActionTypes.LoginPadding, payload: false}))
  );


  constructor(private actions$: Actions,
              private http: HttpClient,
              private store: Store<State>
  ) {}
}
