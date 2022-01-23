import { Action  } from '@ngrx/store';
import { IPizza } from 'src/app/models/pizza.model';

export const LOAD_PIZZAS = '[Products] Loading Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Loading Pizzas FAiled';
export const LOAD_PIZZAS_SUCCESS = '[Products] Loading Pizzas Success';

export class LoadPizzas implements Action {
    readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
    readonly type = LOAD_PIZZAS_FAIL;
    constructor(public payload: IPizza[] ) {}
}

export class LoadPizzasSuccess implements Action {
    readonly type = LOAD_PIZZAS_SUCCESS;
    constructor(public payload: IPizza[] ) {}
}