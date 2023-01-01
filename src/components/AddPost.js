import React, { useContext, useState } from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { PostContext } from './PostGateway';

const AddPost = () => {
    const { register, handleSubmit, reset } = useForm();
    const {post, setPost} = useContext(PostContext);

    const sendDataToApi = (data) => {
        const formData = new FormData();
        const post = {...data, image: data.image[0] }
        formData.append('post[caption]', post.caption)
        formData.append('post[image]', post.image)
        console.log(formData)
        axios.post('http://localhost:3000/posts', formData, {
            headers: {'Content-Type' : 'multipart/form-data'},
        })
        .then((response) => {
            if(response.data.status === 'created') {
                setPost(response.data.post)
                console.log(response)
            }
        })
        reset()
};

return (
    <div>
        <h1>Wall of fame</h1>
        <form className='form' onSubmit={handleSubmit(sendDataToApi)}>
            <div className='form-floating mb-2 col-10'>
                <input 
                type='file'
                {...register('image')}
                accept='image/*' />
                <label htmlFor='floatingInputImage'>Image</label>
            </div>
            <div className='form-floating mb-2 col-10'>
                <input 
                type='text'
                {...register('caption')}
                />
                <label htmlFor='floatingInput'>Caption</label>
            </div>
            <div className='form-floating mb-3 col-10'>
                <button
                type='submit'
                className='btn btn-primary'>
                    Submit
                </button>
            </div>
        </form>
    </div>
)
}

export default AddPost;