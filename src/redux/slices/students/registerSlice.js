import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "redux/common";

const initialState = {
  student: {},
  error: "",
  loading: false,
};

export const studentSignUp = createAsyncThunk("student/studentSignUP", async (student) => {
  const res = await axios.post(`${BASE_URL}/auth/students/signup`, { student });
  if (res.data.accessToken) {
    localStorage.setItem("student", JSON.stringify(res.data));
  }
  return res.data;
});

const studentRegisterSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(studentSignUp.pending, (state) => {
      state.loading = true;
      state.student = {};
      state.error = "";
    });
    builder.addCase(studentSignUp.fulfilled, (state, action) => {
      state.student = action.payload.data;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(studentSignUp.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.student = {};
    });
  },
});

export default studentRegisterSlice;
