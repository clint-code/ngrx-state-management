import { ActionTypes } from '../actions/manage-fruits.actions';
import { Action } from '@ngrx/store';

//define the interface of our State model
export interface State {
    bananasCount: number;
}

//an initial state object, along with some default values
export const initialState: State = {
    bananasCount: 1
};

export function reducer(state = initialState, action: Action): State {

  //a switch statement with a case for each action that
  //can be performed on the state

  switch (action.type) {

    case ActionTypes.SaveBananas: {
      console.log(state);
      return {
        //spread syntax for including all elements from an object in a list
        ...state,
        bananasCount: state.bananasCount + 1
      };
    }

    case ActionTypes.RemoveBanana: {
      console.log(state);
      return {
        ...state,
        bananasCount: state.bananasCount - 1
      };
    }

    case ActionTypes.RemoveAllBananas: {
      console.log(state);
      return {
        ...state,
        bananasCount: 0
      };
    }

    default: {
      console.log(state);
      return state;
    }

  }
  
}
