import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import staffSlice from './slices/staffs/loginSlice';

const MyMiddlewares = [logger];

const store = configureStore({
    reducer: {
        staff: staffSlice.reducer,
    },
    
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
