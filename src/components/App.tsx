import React, {Component} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import Employees from './Employees';
import EmployeePopup from './EmployeePopup';
import Loader from './Loader';
import {fetchEmployees} from './../store/employees/actions';

type Props = {
    fetchEmployees: typeof fetchEmployees
}

class App extends Component<Props> {
    componentDidMount() {
        this.props.fetchEmployees();
    }
    render() {
        return (
            <React.Fragment>
                <Employees />
                <Route path={`/edit/:employeeId`} component={EmployeePopup} />
                <Loader />
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    fetchEmployees,
}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(App) as any);
