import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../common";

const initialState = {
  club: {},
  error: "",
  loading: false,
};

export const myClubFetch = createAsyncThunk("club/myClubFetch", async () => {
  const clubId = JSON.parse(localStorage.getItem("club")).data.id;
  const res = await axios.get(`${BASE_URL}/clubs/${clubId}`);
  return res.data;
});

const myClubFetchSlice = createSlice({
  name: "club",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(myClubFetch.pending, (state) => {
      state.loading = true;
      state.club = {};
      state.error = "";
    });
    builder.addCase(myClubFetch.fulfilled, (state, action) => {
      state.club = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(myClubFetch.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.club = {};
    });
  },
});

export default myClubFetchSlice;
