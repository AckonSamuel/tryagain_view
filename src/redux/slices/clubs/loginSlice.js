import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "redux/common";

const initialState = {
  club: {},
  error: "",
  loading: false,
};

export const clubLogin = createAsyncThunk("club/clubLogin", async (club) => {
  const res = await axios.post(`${BASE_URL}/auth/clubs/login`, { club });
  if (res.data.accessToken) {
    localStorage.setItem("club", JSON.stringify(res.data));
  }
  return res.data;
});

const clubLoginSlice = createSlice({
  name: "club",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(clubLogin.pending, (state) => {
      state.loading = true;
      state.club = {};
      state.error = "";
    });
    builder.addCase(clubLogin.fulfilled, (state, action) => {
      state.club = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(clubLogin.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.club = {};
    });
  },
});

export default clubLoginSlice;
