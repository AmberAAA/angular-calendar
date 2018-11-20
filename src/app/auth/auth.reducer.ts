import {Certificate, User} from './modules/auth';
import {AuthActions, AuthActionTypes} from './auth.actions';
import {createSelector, select} from '@ngrx/store';


export interface State {
  user: User | null;
  certificate: Certificate | null;
  errorMsg: string | null;
  padding: boolean;
}

export const initialState: State = {
  user: null,
  certificate: null,
  errorMsg: null,
  padding: false
};

export const stateRoot = 'auth';


export const selectCertificate = (state: State) => state.certificate;

export const select_certificate = createSelector(
  select('auth'),
  select(selectCertificate)
);

export const select_padding = createSelector(
  select(stateRoot),
  select((state: State) => state.padding)
);

export const select_errorMsg = createSelector(
  select(stateRoot),
  select((state: State) => state.errorMsg)
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

    case AuthActionTypes.LoginPadding: {
      return {
        ...state,
        padding: action.payload
      };
    }

    case AuthActionTypes.ResetErrMsg: {
      return {
        ...state,
        errorMsg: null
      };
    }

    default:
      return state;
  }
}
