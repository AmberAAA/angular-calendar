import { Action } from '@ngrx/store';
import {User, Certificate} from './modules/auth';
import { AuthActionTypes, AuthActions } from './auth.actions';


export interface State {
  user: User | null;
  certificate: Certificate | null;
}

export const initialState: State = {
  user: null,
  certificate: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.Login: {
      return {
        certificate: action.payload,
        user: state.user
      };
    }
    default:
      return state;
  }
}
