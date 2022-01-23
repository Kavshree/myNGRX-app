import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromPizzas from './reducers/pizzas.reducer';


export interface State {
  pizzas: fromPizzas.IState
}

export const reducers: ActionReducerMap<State> = {
  pizzas: fromPizzas.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
