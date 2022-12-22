import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    club: {},
    error: '',
    loading: false,
}

export const clubSignUp = createAsyncThunk(
    'club/clubSignUP',
    async (club) => 
       await axios.post('http://localhost:3000/auth/clubs/signup', {club})
    .then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem('club', JSON.stringify(res.data))
        }
        console.log(res.data)
        return res.data;
    })
)

const clubRegisterSlice = createSlice({
    name: 'club',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(clubSignUp.pending, (state) => { 
            state.loading = true;
            state.club = {};
            state.error = '';
        })
        builder.addCase(clubSignUp.fulfilled, (state, action) => {
            console.log(action.payload);
            state.club = action.payload.data;
            state.loading = false;
            state.error = '';
            console.log(state.club);
        })
        builder.addCase(clubSignUp.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
            state.club = {};
        })
    }
});

export default clubRegisterSlice;
