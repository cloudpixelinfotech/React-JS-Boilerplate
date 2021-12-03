import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import allReducers from './reducers/indexReducer'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';

const history = createHistory();
let store = createStore(allReducers, applyMiddleware(thunk, routerMiddleware(history)));
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <App/>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
