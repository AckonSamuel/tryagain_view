import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "redux/common";

const initialState = {
  club: {},
  error: "",
  loading: false,
};

export const clubSignUp = createAsyncThunk("club/clubSignUP", async (club) => {
  const res = await axios.post(`${BASE_URL}/auth/clubs/signup`, { club });
  if (res.data.accessToken) {
    localStorage.setItem("club", JSON.stringify(res.data));
  }
  return res.data;
});

const clubRegisterSlice = createSlice({
  name: "club",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(clubSignUp.pending, (state) => {
      state.loading = true;
      state.club = {};
      state.error = "";
    });
    builder.addCase(clubSignUp.fulfilled, (state, action) => {
      state.club = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(clubSignUp.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.club = {};
    });
  },
});

export default clubRegisterSlice;
