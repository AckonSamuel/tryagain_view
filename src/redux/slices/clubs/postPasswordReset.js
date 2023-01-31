import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../common";

const initialState = {
  club: {},
  error: "",
  loading: false,
};

export const postPasswordReset = createAsyncThunk("club/postPasswordReset", async (club) => {
  const res = await axios.patch(`${BASE_URL}/auth/clubs/password`, { club });
  return res.data;
});

const postPasswordResetSlice = createSlice({
  name: "club",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postPasswordReset.pending, (state) => {
      state.loading = true;
      state.club = {};
      state.error = "";
    });
    builder.addCase(postPasswordReset.fulfilled, (state, action) => {
      state.club = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(postPasswordReset.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.club = {};
    });
  },
});

export default postPasswordResetSlice;
