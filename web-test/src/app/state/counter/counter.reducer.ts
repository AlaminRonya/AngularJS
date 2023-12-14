import { createReducer, on } from "@ngrx/store";
import * as CounterActions from './counter.actions';
export const initialState = 0;
export const counterReducer = createReducer(
    initialState,
    on(CounterActions.increment, (state)=>state++),
    on(CounterActions.decrement, (state)=>state--),
    on(CounterActions.reset, (state)=>0),

);