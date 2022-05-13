import { ActionTypes, ActionUnion } from '../actions/manage-fruits.actions';
import { Action } from '@ngrx/store';

//define the interface of our State model
export interface State {
  applesCount: number;
}

//an initial state object, along with some default values
export const initialState: State = {
  applesCount: 1
};

export function reducer(state = initialState, action: Action): State {

  //a switch statement with a case for each action that
  //can be performed on the state

  switch (action.type) {

    case ActionTypes.SaveApples: {
      console.log(state);
      return {
        //spread syntax for including all elements from an object in a list
        ...state,
        applesCount: state.applesCount + 1
      };
    }

    case ActionTypes.RemoveApple: {
      console.log(state);
      return {
        ...state,
        applesCount: state.applesCount - 1
      };
    }

    case ActionTypes.RemoveAllApples: {
      console.log(state);
      return {
        ...state,
        applesCount: 0
      };
    }

    default: {
      console.log(state);
      return state;
    }

  }

}
