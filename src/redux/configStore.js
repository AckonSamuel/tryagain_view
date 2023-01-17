import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import studentRegisterSlice from "./slices/students/registerSlice";
import studentLoginSlice from "./slices/students/loginSlice";
import clubLoginSlice from "./slices/clubs/loginSlice";
import clubRegisterSlice from "./slices/clubs/registerSlice";
import postFetchSlice from "./slices/posts/postFetch";
import postUploadSlice from "./slices/posts/postUpload";
import clubUpdateSlice from "./slices/clubs/updateSlice";
import myClubFetchSlice from "./slices/clubs/getMyClub";

const MyMiddlewares = [logger, thunk];

const store = configureStore({
  reducer: {
    studentLogin: studentLoginSlice.reducer,
    studentRegister: studentRegisterSlice.reducer,
    clubLogin: clubLoginSlice.reducer,
    clubRegister: clubRegisterSlice.reducer,
    postFetch: postFetchSlice.reducer,
    postUpload: postUploadSlice.reducer,
    clubUpdate: clubUpdateSlice.reducer,
    myClubFetch: myClubFetchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "student/studentLogout/fulfilled",
          "staff/staffLogout/fulfilled",
          "club/clubLogout/fulfilled",
          "club/clubUpdate/fulfilled",
          "post/postUpload/fulfilled",
          "post/postFetch/fulfilled",
        ],
      },
    }).concat(MyMiddlewares),
});

export default store;
