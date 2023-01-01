import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import staffLoginSlice from './slices/staffs/loginSlice';
import staffRegisterSlice from './slices/staffs/registerSlice';
import studentRegisterSlice from './slices/students/registerSlice';
import studentLoginSlice from './slices/students/loginSlice';
import clubLoginSlice from './slices/clubs/loginSlice';
import clubRegisterSlice from './slices/clubs/registerSlice';
import postFetchSlice from './slices/posts/postFetch';
import postUploadSlice from './slices/posts/postUpload';

const MyMiddlewares = [logger, thunk];

const store = configureStore({
    reducer: {
        staffLogin: staffLoginSlice.reducer,
        staffRegister: staffRegisterSlice.reducer,
        studentLogin: studentLoginSlice.reducer,
        studentRegister: studentRegisterSlice.reducer,
        clubLogin: clubLoginSlice.reducer,
        clubRegister: clubRegisterSlice.reducer,
        postFetch: postFetchSlice.reducer,
        postUpload: postUploadSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['student/studentLogout/fulfilled',
    'staff/staffLogout/fulfilled',
'club/clubLogout/fulfilled'],
      },
    }).concat(MyMiddlewares),
    
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
