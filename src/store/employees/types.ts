export const SET_EMPLOYEES_LIST = 'SET_EMPLOYEES_LIST';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';

export type Employee = {
    id: number
    name: string
    surname: string
    age: number
    role: string
}

export type EmployeesState = {
    employees: Array<Employee>
}

interface SetEmployeesListAction {
    type: typeof SET_EMPLOYEES_LIST
    payload: Array<Employee>
}

interface UpdateEmployeeAction {
    type: typeof UPDATE_EMPLOYEE
    payload: Employee
}

export type EmployeesActionTypes = SetEmployeesListAction | UpdateEmployeeAction;
