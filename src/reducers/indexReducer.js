import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import Users from './usersReducers';
import Auth from './authReducer';
import Question from './questionReducers';

export default combineReducers({Users,Auth,Question,routerReducer});
