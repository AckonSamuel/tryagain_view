import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import staffReducer from './slices/loginSlice';

const MyMiddlewares = [logger];

// const rootReducer = combineReducers({
//     auth: authReducer,
//     message: messageReducer,
//     staff: staffReducer,
// });

const store = configureStore({
    reducer: {
        staff: staffReducer,
    },
    
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
