import {combineReducers} from 'redux';
import {employeesReducer} from './employees/reducer';
import {loaderReducer} from './loader/reducer';

export const rootReducer = combineReducers({
    employees: employeesReducer,
    loader: loaderReducer
});

export type AppState = ReturnType<typeof rootReducer>;
