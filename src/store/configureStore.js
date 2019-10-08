import {applyMiddleware, createStore, compose} from 'redux'
import {rootReducer} from "../reducers";
import {logger} from "redux-logger";
import thunk from "redux-thunk";

export const middlewares = [thunk,logger];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)));