import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../common";

const initialState = {
  executive: [],
  error: "",
  loading: false,
};

export const executiveFetch = createAsyncThunk("executive/executiveFetch", async () => {
  const clubId = JSON.parse(localStorage.getItem("club")).data.id;
  const token = JSON.parse(localStorage.getItem("club")).accessToken;
  const res = await axios.get(`${BASE_URL}/clubs/${clubId}/club_executives`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
});

const executiveFetchSlice = createSlice({
  name: "club_executives",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(executiveFetch.pending, (state) => {
      state.loading = true;
      state.executive = [];
      state.error = "";
    });
    builder.addCase(executiveFetch.fulfilled, (state, action) => {
      state.executive = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(executiveFetch.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.executive = [];
    });
  },
});

export default executiveFetchSlice;
