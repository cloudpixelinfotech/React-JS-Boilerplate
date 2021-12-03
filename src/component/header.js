import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
    AppBar: {
        backgroundColor: 'dimgrey',
        color: 'white',
    }
};

class Header extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default" className={classes.AppBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            <h2>Online Test</h2>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);