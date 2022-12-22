import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    student: {},
    error: '',
    loading: false,
}

export const studentLogin = createAsyncThunk(
    'student/studentLogin',
    async (student) => 
       await axios.post('http://localhost:3000/auth/students/login', {student})
    .then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem('student', JSON.stringify(res.data))
        }
        console.log(res.data)
        return res.data;
    })
)

const studentLoginSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(studentLogin.pending, (state) => { 
            state.loading = true;
            state.student = {};
            state.error = '';
        })
        builder.addCase(studentLogin.fulfilled, (state, action) => {
            console.log(action.payload);
            state.student = action.payload.data;
            state.loading = false;
            state.error = '';
            console.log(state.student);
        })
        builder.addCase(studentLogin.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
            state.student = {};
        })
    }
});

export default studentLoginSlice;