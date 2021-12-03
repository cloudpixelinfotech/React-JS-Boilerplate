import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    button: {
        marginTop: '25%',
        width: '20%',
        fontSize: '30px',
    }
};

const data = [
    {
        avtar: 'Avter1'
    },
    {
        avtar: 'Avter2'
    },
    {
        avtar: 'Avter3'
    },
    {
        avtar: 'Avter4'
    },
    {
        avtar: 'Avter5'
    },
    {
        avtar: 'Avter6'
    },
    {
        avtar: 'Avter1'
    },
    {
        avtar: 'Avter2'
    },
    {
        avtar: 'Avter3'
    },
    {
        avtar: 'Avter4'
    },
    {
        avtar: 'Avter5'
    },
    {
        avtar: 'Avter6'
    },
    {
        avtar: 'Avter1'
    },
    {
        avtar: 'Avter2'
    },
    {
        avtar: 'Avter3'
    },
    {
        avtar: 'Avter4'
    },
    {
        avtar: 'Avter5'
    },
    {
        avtar: 'Avter6'
    }
]

class Start extends React.Component {

    state = {
        show: 3
    }

    setTimer = () => {
        this.props.history.push('/question1');
    };

    nextGo = () => {
        this.setState({
            show: this.state.show + 3
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.setTimer}>
                    start Test
                </Button>
                
                {
                    data.map((value,index) => {
                        return index < this.state.show && <div>{value.avtar}</div>
                    })
                }
                {
                    this.state.show!==data.length && <div onClick={this.nextGo}>Next</div>
                }
            </div>
        )
    }
}

Start.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Start);