import {Certificate, User} from './modules/auth';
import {AuthActions, AuthActionTypes} from './auth.actions';
import {createSelector, select} from '@ngrx/store';


export interface State {
  user: User | null;
  certificate: Certificate | null;
  errorMsg: string | null;
}

export const initialState: State = {
  user: null,
  certificate: null,
  errorMsg: null
};

export const stateRoot = 'auth';


export const selectCertificate = (state: State) => state.certificate;

export const my = createSelector(
  select('auth'),
  select(selectCertificate)
)


// export const selectFeature = createFeatureSelector<{}, State> (
//   ''
// )

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.Login: {
      return {
        ...state,
        certificate: action.payload
      };
    }

    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        user: action.payload
      };
    }

    case AuthActionTypes.LoginFailed: {
      return {
        ...state,
        errorMsg: action.payload
      };
    }

    default:
      return state;
  }
}
