import {
    EmployeesState,
    EmployeesActionTypes,
    SET_EMPLOYEES_LIST,
    UPDATE_EMPLOYEE
} from './types';

const initialState: EmployeesState = {
    employees: []
};

export function employeesReducer(
    state = initialState,
    action: EmployeesActionTypes
): EmployeesState {
    switch (action.type) {
        case SET_EMPLOYEES_LIST:
            return {
                ...state,
                employees: action.payload
            };
        case UPDATE_EMPLOYEE:
            return {
                employees: state.employees.map(
                    employee => employee.id === action.payload.id ? action.payload : employee
                )
            };
        default:
        return state
    }
}
