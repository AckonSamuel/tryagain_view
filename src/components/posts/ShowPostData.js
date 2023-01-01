import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

const ShowPostData = () => {

    const posts = useSelector((state) => state.postFetch.post.data, shallowEqual);
    console.log(posts)

    return (
        <div className='container border border-info'>
        <div className="row">
            { posts &&
                Array.from(posts).map((data) => {
                    return (
                        <div className="col-3"  key = {data.id}>
                            <div className="card">
                                <img className="card-img-top" src={data.attributes.image_url} alt="url for foto" />
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

export default ShowPostData;