
import { IPizza } from "src/app/models/pizza.model";
import * as fromPizzas from '../actions/pizzas.action';

export interface IState {
    data: IPizza[],
    loaded: boolean,
    loading: boolean
}

export const initialState : IState = { 
    data: [],
    loaded: false,
    loading: false
 }

 export function reducer(state = initialState, action: any) : IState  {

    switch(action) {
        case fromPizzas.LOAD_PIZZAS: {

            return {
                ...state,
                loading: true
            }
        }
        case fromPizzas.LOAD_PIZZAS_FAIL: {

            return {
                ...state,
                loaded: true,
                loading: false
            }
        }
        case fromPizzas.LOAD_PIZZAS_SUCCESS: {
            
            return {
                ...state,
                loaded: true,
                loading: false
            }
        }
    }

    return state;
 }
