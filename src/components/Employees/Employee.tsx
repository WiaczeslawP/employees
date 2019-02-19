import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';
import {Employee as EmployeeType} from './../../store/employees/types';

type Props = {
    employee: EmployeeType
}

const Employee: React.FC<Props> = ({employee}) => (
    <TableRow>
        <TableCell>{employee.name}</TableCell>
        <TableCell>{employee.surname}</TableCell>
        <TableCell>{employee.age}</TableCell>
        <TableCell>{employee.role}</TableCell>
        <TableCell>
            <Link to={`/edit/${employee.id}`}>
                <IconButton>
                    <EditIcon />
                </IconButton>
            </Link>
        </TableCell>
    </TableRow>
);

export default Employee;
