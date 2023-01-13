import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "redux/common";
import clubAuthHeader from "../../services/clubs/auth-header";

const initialState = {
  club: {},
  error: "",
  loading: false,
};

export const clubLogout = createAsyncThunk("club/clubLogout", async () => {
  const res = await axios.delete(`${BASE_URL}/auth/clubs/logout`, {
    headers: clubAuthHeader(),
  });
  if (res.data.status === 200) {
    localStorage.removeItem("club");
  }

  return res;
});

const clubLogoutSlice = createSlice({
  name: "club",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(clubLogout.pending, (state) => {
      state.loading = true;
      state.club = {};
      state.error = "";
    });
    builder.addCase(clubLogout.fulfilled, (state, action) => {
      state.club = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(clubLogout.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.club = {};
    });
  },
});

export default clubLogoutSlice;
