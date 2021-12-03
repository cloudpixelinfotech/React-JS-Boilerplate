import React, {Component} from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from './component/header';
import Login from './component/login';
import Start from './Question/start';
import Question1 from './Question/question1';
import Question2 from './Question/question2';
import Question3 from './Question/question3';
import Question4 from './Question/question4';
import Question5 from './Question/question5';
import Question6 from './Question/question6';
import Question7 from './Question/question7';
import Question8 from './Question/question8';
import Question9 from './Question/question9';
import Question10 from './Question/question10';
import End from './Question/end';
import Demo from './Question/demo';

class App extends Component {
    render() {

        const PrivateRoute = ({component: Component, ...rest}) => {
            return (
                <Route {...rest} render={(routeProps) => (
                    this.props.users ?
                        <Component {...routeProps}/> : <Redirect to='/login'/>)}/>

            )
        };

        const PublicRoute = ({component: Component, ...rest}) => {
            return (
                <Route {...rest} render={(routeProps) => (
                    !this.props.users ?
                        <Component {...routeProps}/> :
                        this.props.users.message === 'Fail' ? <Component {...routeProps}/> : <Redirect to="/"/>
                )}/>
            )
        };

        return (
            <div className="App">
                <Header />
                <Switch>
                    <PublicRoute path="/login" component={Login}/>
                    <PrivateRoute exact path="/" component={Start}/>
                    <PrivateRoute exact path="/question1" component={Question1}/>
                    <PrivateRoute exact path="/question2" component={Question2}/>
                    <PrivateRoute exact path="/question3" component={Question3}/>
                    <PrivateRoute exact path="/question4" component={Question4}/>
                    <PrivateRoute exact path="/question5" component={Question5}/>
                    <PrivateRoute exact path="/question6" component={Question6}/>
                    <PrivateRoute exact path="/question7" component={Question7}/>
                    <PrivateRoute exact path="/question8" component={Question8}/>
                    <PrivateRoute exact path="/question9" component={Question9}/>
                    <PrivateRoute exact path="/question10" component={Question10}/>
                    <PrivateRoute exact path="/end" component={End}/>
                    <PrivateRoute exact path="/demo" component={Demo}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.Auth.user
    }
};

export default withRouter(connect(mapStateToProps, null)(App));