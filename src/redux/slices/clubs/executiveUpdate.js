import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../common";

const initialState = {
  executive: [],
  error: "",
  loading: false,
};

export const executiveEdit = createAsyncThunk("executive/executiveEdit", async (executive) => {
  const clubId = JSON.parse(localStorage.getItem("club")).data.id;
  const token = JSON.parse(localStorage.getItem("club")).accessToken;
  const executiveId = JSON.parse(localStorage.getItem("executiveId"));
  const res = await axios.patch(
    `${BASE_URL}/clubs/${clubId}/club_executives/${executiveId}`,
    { club_executive: { ...executive } },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
});

const executiveEditSlice = createSlice({
  name: "executive",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(executiveEdit.pending, (state) => {
      state.loading = true;
      state.executive = [];
      state.error = "";
    });
    builder.addCase(executiveEdit.fulfilled, (state, action) => {
      state.executive = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(executiveEdit.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.executive = [];
    });
  },
});

export default executiveEditSlice;
