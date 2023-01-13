import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "redux/common";
import studentAuthHeader from "../../services/students/auth-header";

const initialState = {
  student: {},
  error: "",
  loading: false,
};

export const studentLogout = createAsyncThunk("student/studentLogout", async () => {
  const res = await axios.delete(`${BASE_URL}/auth/students/logout`, {
    headers: studentAuthHeader(),
  });
  if (res.data.status === 200) {
    localStorage.removeItem("student");
  }

  return res;
});

const studentLogoutSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(studentLogout.pending, (state) => {
      state.loading = true;
      state.student = {};
      state.error = "";
    });
    builder.addCase(studentLogout.fulfilled, (state, action) => {
      state.student = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(studentLogout.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.student = {};
    });
  },
});

export default studentLogoutSlice;
