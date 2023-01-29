import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../common";

const initialState = {
  executive: [],
  error: "",
  loading: false,
};

export const executiveDelete = createAsyncThunk("executive/executiveDelete", async (id) => {
  const clubId = JSON.parse(localStorage.getItem("club")).data.id;
  const token = JSON.parse(localStorage.getItem("club")).accessToken;
  const res = await axios.delete(`${BASE_URL}/clubs/${clubId}/club_executives/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
});

const executiveDeleteSlice = createSlice({
  name: "executive",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(executiveDelete.pending, (state) => {
      state.loading = true;
      state.executive = [];
      state.error = "";
    });
    builder.addCase(executiveDelete.fulfilled, (state, action) => {
      state.executive = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(executiveDelete.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.executive = [];
    });
  },
});

export default executiveDeleteSlice;
