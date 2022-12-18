import { applyMiddleware, combineReducers, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import messageReducer from './reducers/message';

const MyMiddlewares = [thunk, logger];

const rootReducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
});

const store = configureStore({
    reducer: rootReducer,
}, applyMiddleware(...MyMiddlewares));

export default store;
