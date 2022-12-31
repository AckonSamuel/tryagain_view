import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import clubAuthHeader from '../../services/clubs/auth-header';

const initialState = {
    club: {},
    error: '',
    loading: false,
}

export const clubLogout = createAsyncThunk(
    'club/clubLogout',
    async () => 
       await axios.delete('http://localhost:3000/auth/clubs/logout', 
       { headers: clubAuthHeader() }).then((res) => {
        // window.location.reload
        if(res.data.status === 200) {
            localStorage.removeItem('club');
        }
        console.log(res);
        return res;
    })
)

const clubLogoutSlice = createSlice({
    name: 'club',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(clubLogout.pending, (state) => { 
            state.loading = true;
            state.club = {};
            state.error = '';
        })
        builder.addCase(clubLogout.fulfilled, (state, action) => {
            console.log(action.payload);
            state.club = action.payload.data;
            state.loading = false;
            state.error = '';
            console.log(state.club);
        })
        builder.addCase(clubLogout.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
            state.club = {};
        })
    }
});

export default clubLogoutSlice;
