import { combineReducers, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';
import message from './message';

export default combineReducers({
    auth,
    message,
});