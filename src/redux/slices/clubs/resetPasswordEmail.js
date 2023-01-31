import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../common";

const initialState = {
  club: {},
  error: "",
  loading: false,
};

export const resetPasswordEmail = createAsyncThunk("club/resetPasswordEmail", async (club) => {
  const res = await axios.post(`${BASE_URL}/auth/clubs/password`, { club });
  return res.data;
});

const resetPasswordEmailSlice = createSlice({
  name: "club",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resetPasswordEmail.pending, (state) => {
      state.loading = true;
      state.club = {};
      state.error = "";
    });
    builder.addCase(resetPasswordEmail.fulfilled, (state, action) => {
      state.club = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(resetPasswordEmail.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.club = {};
    });
  },
});

export default resetPasswordEmailSlice;
