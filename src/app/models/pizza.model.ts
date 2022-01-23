
import { ITopping } from './topping.model';

export interface IPizza {
    id?: String,
    name?: String,
    toppings?: ITopping[]
}