import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    photos: [],
    error: '',
    loading: false,
}

export const postUpload = createAsyncThunk(
    'post/postUpload',
    async (post) => 
       await axios.post('http://localhost:3000/posts', post,
       {headers: {'Content-Type' : 'multipart/form-data'},}
    )
    .then((res) => {

        console.log(res)
        return res;
    })
)

const postUploadSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(postUpload.pending, (state) => { 
            state.loading = true;
            state.post = [];
            state.error = '';
        })
        builder.addCase(postUpload.fulfilled, (state, action) => {
            console.log(action.payload);
            state.post = action.payload.data;
            state.loading = false;
            state.error = '';
            console.log(state.post);
        })
        builder.addCase(postUpload.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
            state.post = [];
        })
    }
});

export default postUploadSlice;