import { combineReducers, createStore } from "redux";

import count from "./store/reducers";
import { CounterState } from "./store/types";

const reducer = combineReducers({
    count
});

export interface State {
    count: CounterState;
}

const configureStore = (initialState?: State) =>
    createStore(
        reducer,
        initialState,
    );

const store = configureStore();

export default store;
