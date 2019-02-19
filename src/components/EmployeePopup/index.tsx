import React, {Component} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import {getEmployeeById} from './../../store/employees/selectors';
import {Employee} from './../../store/employees/types';
import {saveEmployee} from './../../store/employees/actions';
import {AppState} from '../../store';

type Props = {
    employee: Employee,
    saveEmployee: Function,
    match: any,
    history: any
};

type State = Employee | undefined;

class EmployeePopup extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = props.employee;
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.employee !== this.props.employee) {
            this.setState(this.props.employee);
        }
    }

    handleClose = () => this.props.history.push('/')

    handleSave = () => this.props.saveEmployee(this.state).then(this.handleClose)

    handleChange = (name: keyof Employee) => (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [name]: event.target.value,
        } as Pick<State, keyof State>);
    }

    render() {
        return this.state ? (
            <Dialog
                open
                onClose={this.handleClose}
            >
                <DialogTitle>Edit employee</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Surname"
                        value={this.state.surname}
                        onChange={this.handleChange('surname')}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Age"
                        value={this.state.age}
                        onChange={this.handleChange('age')}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Role"
                        value={this.state.role}
                        onChange={this.handleChange('role')}
                        margin="normal"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={this.handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        ) : null;
    }
}

const mapStateToProps = (state: AppState, props: Props) => ({
    employee: getEmployeeById(state, Number(props.match.params.employeeId))
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    saveEmployee,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePopup as any);
