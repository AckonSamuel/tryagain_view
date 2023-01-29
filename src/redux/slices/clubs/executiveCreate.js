import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../common";

const initialState = {
  executive: [],
  error: "",
  loading: false,
};

export const executiveCreate = createAsyncThunk("executive/executiveCreate", async (executive) => {
  const clubId = JSON.parse(localStorage.getItem("club")).data.id;
  const token = JSON.parse(localStorage.getItem("club")).accessToken;
  const res = await axios.post(
    `${BASE_URL}/clubs/${clubId}/club_executives`,
    { club_executive: { ...executive } },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
});

const executiveCreateSlice = createSlice({
  name: "executive",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(executiveCreate.pending, (state) => {
      state.loading = true;
      state.executive = [];
      state.error = "";
    });
    builder.addCase(executiveCreate.fulfilled, (state, action) => {
      state.executive = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(executiveCreate.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.executive = [];
    });
  },
});

export default executiveCreateSlice;
