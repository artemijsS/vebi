import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.__PRELOADED_STATE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// @ts-ignore
delete window.__PRELOADED_STATE__

export default store;
export type RootState = ReturnType<typeof store.getState>
