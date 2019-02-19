import {applyMiddleware, compose, createStore, StoreEnhancer} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from './logger';

import {rootReducer} from './../store';

export default function configureStore() {
    const middlewares = [logger, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers: StoreEnhancer = compose(...enhancers);

    const initialState = {};
    const store = createStore(rootReducer, initialState, composedEnhancers);

    return store;
}
