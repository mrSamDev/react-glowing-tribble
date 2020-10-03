import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import auth from "./auth/reducer";

import common from "./common/reducer";

import employee from "./employee/reducer";

import thunk from "redux-thunk";

const env = process.env.NODE_ENV || "development";

const isDevToolsAdded = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = env === "development" && isDevToolsAdded ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const rootReducer = combineReducers({ auth, common, employee });

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
