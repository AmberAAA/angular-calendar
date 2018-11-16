import { Action } from '@ngrx/store';
import {Log} from '@angular/core/testing/src/logger';

export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
  Login = '[Login Component] Login'
}

export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}

export class Login implements Action {
  readonly type = ActionTypes.Login;
  constructor (public payload: {email: string, passwd: string}) {
    console.log(this.payload.email);
    console.log(this.payload.passwd);
    // TODO: success login and return _id

  }
}

export type Union = Login | Reset | Decrement | Increment;
