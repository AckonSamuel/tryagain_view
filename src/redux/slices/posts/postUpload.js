import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "redux/common";

const initialState = {
  photos: [],
  error: "",
  loading: false,
};

export const postUpload = createAsyncThunk("post/postUpload", async (club) => {
  const clubId = JSON.parse(localStorage.getItem("club")).data.id;
  const res = await axios.patch(`${BASE_URL}/clubs/${clubId}`, club, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res;
});

const postUploadSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postUpload.pending, (state) => {
      state.loading = true;
      state.post = [];
      state.error = "";
    });
    builder.addCase(postUpload.fulfilled, (state, action) => {
      state.post = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(postUpload.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.post = [];
    });
  },
});

export default postUploadSlice;
