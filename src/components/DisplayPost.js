import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { PostContext } from './PostGateway';

const DisplayPost = () => {
    const {post, setPost} = useContext(PostContext);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then((response) => {
            setPost(response.data)
        })
    }, [setPost])

    return (
        <div className='container border border-info'>
        <div className="row">
            {
                Array.from(post).map((data) => {
                    return (
                        <div className="col-3"  key = {data.id}>
                            <div className="card">
                                <img className="card-img-top" src={data.image} alt="url for foto" />
                                <div className="card-body">
                                  <p className="card-text">{data.caption}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default DisplayPost;