import { Action } from '@ngrx/store';
import { Certificate } from './modules/auth';

export enum AuthActionTypes {
  Login = '[Auth] Login'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor (public payload: Certificate) {}
}

export type AuthActions = Login;
