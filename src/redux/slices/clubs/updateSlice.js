import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../common";
import CLUBID from "../../commonId";

const initialState = {
  club: {},
  error: "",
  loading: false,
};

export const clubUpdate = createAsyncThunk("club/clubUpdate", async (club) => {
  const res = await axios.patch(`${BASE_URL}/clubs/eeae61ed-5156-405b-8173-d56c31f943b9`, { club });
//   if (res.data.accessToken) {
//     localStorage.setItem("club", JSON.stringify(res.data));
//   }
  return res.data;
});

const clubUpdateSlice = createSlice({
  name: "club",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(clubUpdate.pending, (state) => {
      state.loading = true;
      state.club = {};
      state.error = "";
    });
    builder.addCase(clubUpdate.fulfilled, (state, action) => {
      state.club = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(clubUpdate.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.club = {};
    });
  },
});

export default clubUpdateSlice;
