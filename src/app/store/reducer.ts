import { ActionTypes } from './actions';
import { initialState } from './state';
import { Union } from './actions';

export function counterReducer(state = initialState, action: Union) {
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

    case ActionTypes.Login:
      // console.log(action.payload)
      return {
        ...state,
        home: state.home + 1
      };

    default:
      return state;
  }
}
