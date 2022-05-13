import { Component } from '@angular/core';
import { select, Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActionTypes } from './store/actions/manage-fruits.actions';
//import { ApplesState } from './store/state/apples.state';
//import { FruitState } from './store/state/fruits.state';
import { State as FruitState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'NgRx Fruit Shop: Apples and Bananas';

  applesInStore$: Observable<any> = this.store.select(state => state.apples);

  bananasInStore$: Observable<any> = this.store.select(state => state.bananas);

  constructor(
    private store: Store<FruitState>
    ) {}

   // Dispatch an addApples action
  addApples(apples: number): void {
    console.log ("Dispatching addApples action")
    this.store.dispatch({
      type: ActionTypes.SaveApples,
      payload: apples
    });
  }
  
  // Dispatch removeApples action
  removeApples(apples: number): void {
    console.log ("Dispatching removeApples action")
    this.store.dispatch({
      type: ActionTypes.RemoveApple,
      payload: apples
    });
  }
   
  // Dispatch removeAllApples action
  removeAllApples(): void {
    console.log ("Dispatching removeAllApples action")
    this.store.dispatch({
      type: ActionTypes.RemoveAllApples
    });
  }

  // Dispatch an addBananas action
  addBananas(bananas: number): void {
      console.log ("Dispatching addBananas action")
      this.store.dispatch({
        type: ActionTypes.SaveBananas,
        payload: bananas
    });
  }
    
    // Dispatch removeBananas action
    removeBanana(bananas: number): void {
      console.log ("Dispatching removeBanana action")
      this.store.dispatch({
        type: ActionTypes.RemoveBanana,
        payload: bananas
      });
    }
     
    // Dispatch removeAllBananas action
    removeAllBananas(): void {
      console.log ("Dispatching removeAllBananas action")
      this.store.dispatch({
        type: ActionTypes.RemoveAllBananas
      });
    }
  
}
