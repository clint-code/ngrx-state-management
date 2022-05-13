import { Action } from '@ngrx/store';
import { Apples } from '../../models/apples';
import { Bananas } from "../../models/bananas";

export enum ActionTypes {
  SaveApples = 'Save Apples',
  RemoveApple = 'Remove Apple',
  RemoveAllApples = 'Remove All Apples',
  SaveBananas = 'Save Bananas',
  RemoveBanana = 'Remove Banana',
  RemoveAllBananas = 'Remove All Bananas'
}

export class SaveApples implements Action {
  readonly type = ActionTypes.SaveApples;
  constructor(public payload: Apples) {}
}

export class RemoveApples implements Action {
  readonly type = ActionTypes.RemoveApple;
  constructor(public payload: Apples) {}
}

export class RemoveAllApples implements Action {
  readonly type = ActionTypes.RemoveAllApples;
  constructor(public payload: Apples) {}
}

export class SaveBananas implements Action {
  readonly type = ActionTypes.SaveBananas;
  constructor(public payload: Bananas) {}
}

export class RemoveBananas implements Action {
  readonly type = ActionTypes.RemoveBanana;
  constructor(public payload: Bananas) {}
}

export class RemoveAllBananas implements Action {
  readonly type = ActionTypes.RemoveAllBananas;
  constructor(public payload: Bananas) {}
}

// This is used in the Reducer as a list of the Actions it can support
export type ActionUnion = SaveApples | RemoveApples | RemoveAllApples | SaveBananas | RemoveBananas | RemoveAllBananas;
