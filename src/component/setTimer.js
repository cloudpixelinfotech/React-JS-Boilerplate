import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Countdown from 'react-countdown-now';

const styles = {
    root: {
        flexGrow: 1,
    },
    AppBar: {
        backgroundColor: 'dimgrey',
        color: 'white',
    }
};

const CompletionList = () => <span>You are good to go!</span>;

class SetTimer extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Countdown date={Date.now() + 5000}>
                    <CompletionList />
                </Countdown>
            </div>
        )
    }
}

SetTimer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SetTimer);