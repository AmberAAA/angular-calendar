import { Action } from '@ngrx/store';
import { ActionTypes } from './actions';
import { initialState } from './state';

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return {
        ...state,
        home: state.home + 1,
      };

    case ActionTypes.Decrement:
      return {
        ...state,
        home: state.home - 1
      };

    case ActionTypes.Reset:
      return {
        ...state,
        home: 0
      };

    default:
      return state;
  }
}
