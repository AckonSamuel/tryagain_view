import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postFetch } from '../../redux/slices/posts/postFetch';
import ShowPostData from './ShowPostData';

const DisplayPost = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postFetch())
        .then((res) => {
            console.log(res);
        })
    }, [])

    return (
        <ShowPostData />
  )
}

export default DisplayPost;