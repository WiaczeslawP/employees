import React from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Employee from './Employee';
import {AppState} from './../../store';
import {getEmployees} from './../../store/employees/selectors';
import {Employee as EmployeeType} from './../../store/employees/types';
import './styles.css';

type Props = {
    employees: Array<EmployeeType>
}

const Employees: React.FC<Props> = ({employees}) => employees.length ? (
    <div className="employees-list-container">
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee) =>
                        <Employee employee={employee} key={employee.id} />
                    )}
                </TableBody>
            </Table>
        </Paper>
    </div>
) : null;

const mapStateToProps = (state: AppState) =>  ({
    employees: getEmployees(state)
});

export default connect(mapStateToProps)(Employees);
