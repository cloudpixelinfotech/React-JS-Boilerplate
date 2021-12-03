import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class End extends React.Component {

    constructor(prop){
        super();

        this.state = {
            correct: 0,
            wrong: 0,
        }
    }

    increment = () => {
        debugger
        this.setState({
            correct: this.state.correct + 1
        })
    };

    decrement = () => {
        this.setState({
            wrong: this.state.wrong + 1
        })
    };

    render() {
        const {classes,questionData} = this.props;
        const { correct, wrong} =this.state;
        console.log("Result:-",correct,wrong);
        return (
            <div className={classes.root}>
                {
                    questionData.map((v,i)=>{
                        debugger
                        return(
                            <div>
                                {v.question==="1" && v.radio==="4" ? console.log("Yes") : console.log("No") }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

End.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        questionData: state.Question.questionData
    };
};

export default withStyles(styles)(connect(mapStateToProps, null)(End));