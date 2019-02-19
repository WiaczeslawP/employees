import React from 'react';
import {connect} from 'react-redux';
import {getIsLoaderShown} from './../../store/loader/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import {AppState} from './../../store';

type Props = {
    isShown: boolean
}

const style: React.CSSProperties = {
    position: 'fixed',
    top: '45%',
    left: '50%',
    zIndex: 10000
};

const Loader: React.FC<Props> = ({isShown}) => isShown ? (
    <div style={style}>
        <CircularProgress />
    </div>
) : null;

const mapStateToProps = (state: AppState) => ({
    isShown: getIsLoaderShown(state)
});

export default connect(mapStateToProps)(Loader);
