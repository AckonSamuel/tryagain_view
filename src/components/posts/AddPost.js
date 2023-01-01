import React, { useContext, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { postUpload } from '../../redux/slices/posts/postUpload';



const AddPost = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();

    const sendDataToApi = (data) => {
        const formData = new FormData();
        const post = {...data, image: data.image[0] }
        formData.append('post[caption]', post.caption)
        formData.append('post[image]', post.image)
        console.log(formData)
        dispatch(postUpload(formData))
        .then((response) => {
            if(response.type === 'post/postUpload/fulfilled' ) {
                console.log(response)
                window.location.reload();
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