import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "redux/common";

const initialState = {
  post: [],
  error: "",
  loading: false,
};

export const postFetch = createAsyncThunk("post/postFetch", async () => {
  const clubId = JSON.parse(localStorage.getItem("club")).data.id;
  const res = await axios.get(`${BASE_URL}/clubs/${clubId}`);
  return res;
});

const postFetchSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postFetch.pending, (state) => {
      state.loading = true;
      state.post = [];
      state.error = "";
    });
    builder.addCase(postFetch.fulfilled, (state, action) => {
      state.post = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(postFetch.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.post = [];
    });
  },
});

export default postFetchSlice;
