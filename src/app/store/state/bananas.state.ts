import {Bananas} from "src/app/models/bananas";

export interface BananasState {
  bananaCount: number;
}

export const initialState: BananasState = {
  bananaCount: 0
};
