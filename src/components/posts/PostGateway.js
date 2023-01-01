import { createContext, useState } from 'react';
import AddPost from './AddPost';
import DisplayPost from './DisplayPost';

export const PostContext = createContext(null);

const PostGateway = () => {
    const [post, setPost] = useState(PostContext)

    return(
        <PostContext.Provider value={{ post, setPost }} >
    <div className='conti'>
        <AddPost />
        <DisplayPost />
    </div> 
        </PostContext.Provider >
    )
}

export default PostGateway;