import { Action } from '@ngrx/store';
import {Certificate, User} from './modules/auth';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = 'LOGIN_SUCCESS',
  LoginFailed = 'LOGIN_FAILED',
  SignUp = '[Auth] SignUp'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor (public payload: Certificate) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SignUp;

  constructor (public payload: Certificate) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor (public payload: User) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LoginFailed;

  constructor (public payload: string) {}
}



export type AuthActions =
  Login |
  LoginFailed |
  LoginSuccess
  ;
