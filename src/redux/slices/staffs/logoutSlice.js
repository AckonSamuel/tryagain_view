// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import staffAuthHeader from "../../services/staffs/auth-header";

// const initialState = {
//   staff: {},
//   error: "",
//   loading: false,
// };

// export const staffLogout = createAsyncThunk(
//   "staff/staffLogout",
//   async () =>
//     await axios
//       .delete("http://localhost:3000/auth/staffs/logout", { headers: staffAuthHeader() })
//       .then((res) => {
//         // window.location.reload
//         if (res.status.code === 200) {
//           localStorage.removeItem("staff");
//         }
//
//         return res;
//       })
// );

// const staffLogoutSlice = createSlice({
//   name: "staff",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(staffLogout.pending, (state) => {
//       state.loading = true;
//       state.staff = {};
//       state.error = "";
//     });
//     builder.addCase(staffLogout.fulfilled, (state, action) => {
//
//       state.staff = action.payload.data;
//       state.loading = false;
//       state.error = "";
//       console.log(state.staff);
//     });
//     builder.addCase(staffLogout.rejected, (state, action) => {
//       state.error = action.error.message;
//       state.loading = false;
//       state.staff = {};
//     });
//   },
// });

// export default staffLogoutSlice;
