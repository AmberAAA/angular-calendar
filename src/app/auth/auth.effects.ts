import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, filter, map, mergeMap} from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AuthActionTypes } from './auth.actions';
import {Certificate} from './modules/auth';


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
      this.http.get('http://anborong.live:9000/api/login', {params: action.payload}).pipe(
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
    )
  );

  @Effect()
  signUp$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.SignUp),
    mergeMap((action: Action) =>
      // @ts-ignore
      this.http.post('http://anborong.live:9000/api/login', action.payload, httpOptions).pipe(
        map((data: {state: number, data: any}) => {
          if ( data.state === 0 ) {
            return { type: AuthActionTypes.LoginSuccess, payload: data.data };
          } else if ( data.state === 1 ) {
            return { type: AuthActionTypes.LoginFailed, payload: '账号或密码错误！' };
          } else {
            return { type: AuthActionTypes.LoginFailed, payload: '服务器错误！' };
          }
        })
      )
    )
  );


  constructor(private actions$: Actions,
              private http: HttpClient
  ) {}
}
