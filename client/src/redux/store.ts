import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
export type RootState = ReturnType<typeof store.getState>
