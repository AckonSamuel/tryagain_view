// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   staff: {},
//   error: "",
//   loading: false,
// };

// export const staffSignUp = createAsyncThunk(
//   "staff/staffSignUP",
//   async (staff) =>
//     await axios.post("http://localhost:3000/auth/staffs/signup", { staff }).then((res) => {
//       if (res.data.accessToken) {
//         localStorage.setItem("staff", JSON.stringify(res.data));
//       }
//       console.log(res.data);
//       return res.data;
//     })
// );

// const staffRegisterSlice = createSlice({
//   name: "staff",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(staffSignUp.pending, (state) => {
//       state.loading = true;
//       state.staff = {};
//       state.error = "";
//     });
//     builder.addCase(staffSignUp.fulfilled, (state, action) => {
//       console.log(action.payload);
//       state.staff = action.payload.data;
//       state.loading = false;
//       state.error = "";
//       console.log(state.staff);
//     });
//     builder.addCase(staffSignUp.rejected, (state, action) => {
//       state.error = action.error.message;
//       state.loading = false;
//       state.staff = {};
//     });
//   },
// });

// export default staffRegisterSlice;
