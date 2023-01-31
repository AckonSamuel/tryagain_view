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
import clubLogoutSlice from "./slices/clubs/logoutSlice";
import executiveCreateSlice from "./slices/clubs/executiveCreate";
import executiveFetchSlice from "./slices/clubs/executivesFetch";
import executiveDeleteSlice from "./slices/clubs/executiveDelete";
import executiveEditSlice from "./slices/clubs/executiveUpdate";
import resetPasswordEmailSlice from "./slices/clubs/resetPasswordEmail";
import postPasswordResetSlice from "./slices/clubs/postPasswordReset";

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
    clubLogout: clubLogoutSlice.reducer,
    executiveCreate: executiveCreateSlice.reducer,
    executiveFetch: executiveFetchSlice.reducer,
    executiveDelete: executiveDeleteSlice.reducer,
    executiveEdit: executiveEditSlice.reducer,
    resetPasswordEmail: resetPasswordEmailSlice.reducer,
    postPasswordReset: postPasswordResetSlice.reducer,
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
          "executive/executiveCreate/fulfilled",
          "club/resetPasswordEmail/fulfilled",
        ],
      },
    }).concat(MyMiddlewares),
});

export default store;
