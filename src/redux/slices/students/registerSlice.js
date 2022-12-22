import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    student: {},
    error: '',
    loading: false,
}

export const clubSignUp = createAsyncThunk(
    'student/clubSignUP',
    async (student) => 
       await axios.post('http://localhost:3000/auth/clubs/signup', {student})
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
        builder.addCase(clubSignUp.pending, (state) => { 
            state.loading = true;
            state.student = {};
            state.error = '';
        })
        builder.addCase(clubSignUp.fulfilled, (state, action) => {
            console.log(action.payload);
            state.student = action.payload.data;
            state.loading = false;
            state.error = '';
            console.log(state.student);
        })
        builder.addCase(clubSignUp.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
            state.student = {};
        })
    }
});

export default studentRegisterSlice;