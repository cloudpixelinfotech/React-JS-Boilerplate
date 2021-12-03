import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {question,updateQuestion} from '../action/questionAction';

const styles = {
    root: {
        textAlign: 'left',
        width: '70%',
        margin: '0 auto',
        marginTop: '3%',
    },
    button: {
        fontSize: '18px',
    }
};


class Question2 extends React.Component {
    constructor(){
        super();
        this.state = {
            question: {
                question: '2',
                radio: '',
            },
        }
    }

    goPrevious = () => {
        this.props.history.push('/question1');
    };

    goNext = () => {
        this.props.history.push('/question3');
    };

    changeHandler = (e) => {
        const {question}=this.state;
        question[e.target.name]=e.target.value;
        this.setState({question});
    };

    callAction = () => {
        if(this.props.questionData.length===0){
            this.props.question(this.state.question);
        }else {
            this.props.questionData && this.props.questionData.map((v,i)=>{
                return v.question===this.state.question.question ? this.props.updateQuestion(this.state.question) : this.props.question(this.state.question);
            })
        }
    };

    render(){
        const { classes, questionData } = this.props;
        console.log("QuestionData :- ",questionData);
        return (
            <div className={classes.root}>
                <div className="card">
                    <div className="card-header">Question#: 2</div>
                    <div className="card-body">
                        <div>Which of the followings are value types in C#?</div><br />
                        <div className="input-group mb-3 input-group-lg">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    A
                                    &nbsp;<input type="radio" id="radio1" value="1" name="radio" onChange={this.changeHandler}/>
                                </div>
                            </div>
                            <label for="radio1" className="form-control test-option">Int32</label><br />
                        </div>
                        <div className="input-group mb-3 input-group-lg">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    B
                                    &nbsp;<input type="radio" id="radio2" value="2" name="radio" onChange={this.changeHandler}/>
                                </div>
                            </div>
                            <label for="radio2" className="form-control test-option">Double</label><br />
                        </div>
                        <div className="input-group mb-3 input-group-lg">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    C
                                    &nbsp;<input type="radio" id="radio3" value="3" name="radio" onChange={this.changeHandler}/>
                                </div>
                            </div>
                            <label for="radio3" className="form-control test-option">Decimal</label><br />
                        </div>
                        <div className="input-group mb-3 input-group-lg">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    D
                                    &nbsp;<input type="radio" id="radio4" value="4" name="radio" onChange={this.changeHandler}/>
                                </div>
                            </div>
                            <label for="radio4" className="form-control test-option">All of the above</label><br />
                        </div>
                    </div>
                    <div className="card-footer">
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.goPrevious}>previous</Button>
                        <Button variant="contained" color="primary" className={classes.button} onClick={()=>{this.callAction();this.goNext()}} style={{float: 'right'}}>Next</Button>
                    </div>
                </div>
            </div>
        )
    }
}

Question2.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        questionData: state.Question.questionData
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        question,
        updateQuestion,
    }, dispatch);
};

export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(Question2));