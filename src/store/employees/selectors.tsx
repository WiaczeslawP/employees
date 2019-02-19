import {AppState} from './../../store';
import {Employee} from './types';

export const getEmployees = (state: AppState): Array<Employee> =>
    state.employees.employees;
export const getEmployeeById = (state: AppState, id: number): Employee | undefined =>
    getEmployees(state).find(employee => employee.id === id);
