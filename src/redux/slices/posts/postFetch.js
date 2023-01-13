import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: [],
  error: "",
  loading: false,
};

export const postFetch = createAsyncThunk("post/postFetch", async () => {
  const res = await axios.get("http://localhost:3000/posts");
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
