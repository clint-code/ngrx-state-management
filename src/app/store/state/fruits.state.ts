import { Apples } from 'src/app/models/apples';
import { Bananas } from "src/app/models/bananas";

export interface FruitState {
    appleCount: number;
    bananaCount: number;
}

export const initialState: FruitState = {
    appleCount: 0,
    bananaCount: 0
}