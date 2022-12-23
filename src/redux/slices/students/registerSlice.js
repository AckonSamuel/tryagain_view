import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    student: {},
    error: '',
    loading: false,
}

export const studentSignUp = createAsyncThunk(
    'student/studentSignUP',
    async (student) => 
       await axios.post('http://localhost:3000/auth/students/signup', {student})
    .then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem('student', JSON.stringify(res.data))
        }
        console.log(res.data)
        return res.data;
    })
)

const studentRegisterSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(studentSignUp.pending, (state) => { 
            state.loading = true;
            state.student = {};
            state.error = '';
        })
        builder.addCase(studentSignUp.fulfilled, (state, action) => {
            console.log(action.payload);
            state.student = action.payload.data;
            state.loading = false;
            state.error = '';
            console.log(state.student);
        })
        builder.addCase(studentSignUp.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
            state.student = {};
        })
    }
});

export default studentRegisterSlice;