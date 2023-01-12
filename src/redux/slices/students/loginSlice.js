import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "redux/common";

const initialState = {
  student: {},
  error: "",
  loading: false,
};

export const studentLogin = createAsyncThunk("student/studentLogin", async (student) => {
  const res = await axios.post(`${BASE_URL}/auth/students/login`, { student });
  if (res.data.accessToken) {
    localStorage.setItem("student", JSON.stringify(res.data));
  }
  console.log(res.data.accessToken);
  return res.data;
});

const studentLoginSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(studentLogin.pending, (state) => {
      state.loading = true;
      state.student = {};
      state.error = "";
    });
    builder.addCase(studentLogin.fulfilled, (state, action) => {
      console.log(action.payload);
      state.student = action.payload.data;
      state.loading = false;
      state.error = "";
      console.log(state.student);
    });
    builder.addCase(studentLogin.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.student = {};
    });
  },
});

export default studentLoginSlice;
