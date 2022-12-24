import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import studentAuthHeader from '../../services/students/auth-header';

const initialState = {
    student: {},
    error: '',
    loading: false,
}

export const studentLogout = createAsyncThunk(
    'student/studentLogout',
    async () => 
       await axios.delete('http://localhost:3000/auth/students/logout', 
       { headers: studentAuthHeader() }).then((res) => {
        // window.location.reload
        if(res.data.status === 200) {
            localStorage.removeItem('student');
        }
        console.log(res);
        return res;
    })
)

const studentLogoutSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(studentLogout.pending, (state) => { 
            state.loading = true;
            state.student = {};
            state.error = '';
        })
        builder.addCase(studentLogout.fulfilled, (state, action) => {
            console.log(action.payload.data);
            state.student = action.payload.data;
            state.loading = false;
            state.error = '';
            console.log(state.student);
        })
        builder.addCase(studentLogout.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
            state.student = {};
        })
    }
});

export default studentLogoutSlice;