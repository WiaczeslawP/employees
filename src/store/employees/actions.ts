import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AppState} from './../../store';
import generateData from './../generateData';
import {Employee, SET_EMPLOYEES_LIST, UPDATE_EMPLOYEE} from './types';
import {showLoader, hideLoader} from './../loader/actions';
import callServer from './../callServer';
import {getEmployees} from './selectors';

export function setEmployeesList(employees: Array<Employee>) {
    return {
        type: SET_EMPLOYEES_LIST,
        payload: employees
    }
}

export function updateEmployee(employee: Employee) {
    return {
        type: UPDATE_EMPLOYEE,
        payload: employee
    }
}

export const fetchEmployees =
    (): ThunkAction<void, AppState, null, Action<string>> => dispatch => {
        dispatch(showLoader());
        callServer(() => JSON.parse(localStorage.getItem('employees') || '[]'))
            .then((employees) => {
                dispatch(setEmployeesList(employees as Array<Employee>));
                dispatch(hideLoader());
            });
    };

export const saveEmployee =
    (employee: Employee): ThunkAction<Promise<void>, AppState, null, Action<string>> => (dispatch, getState) => {
        dispatch(showLoader());
        return callServer().then(() => {
            dispatch(updateEmployee(employee));
            dispatch(hideLoader());
            localStorage.setItem('employees', JSON.stringify(getEmployees(getState())));
        });
    };
