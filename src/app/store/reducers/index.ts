//In order to create one of these State trees, 
//we need to create a new file in our Reducers folder 
//called index.ts and export all the State through this one
// index file

import * as appleReducer from './apples-reducer';
import * as bananaReducer from './bananas-reducer';

import { ApplesState } from '../state/apples.state';
import { BananasState } from '../state/bananas.state';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
  apples: appleReducer.State;
  bananas: bananaReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  apples: appleReducer.reducer,
  bananas: bananaReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = [];
