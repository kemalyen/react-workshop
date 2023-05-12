import React, { useState } from 'react'
import { useGetPostsQuery } from '../api/postApi'


const PostList = () => {
    const { data: posts, isLoading } = useGetPostsQuery()


    if (isLoading) {
        return <div>Loading</div>
    }

    if (!posts) {
        return <div>No posts :(</div>
    }

    return (
        <ul>
            {posts.map(({ id, title }) => (
                <li key={id} >
                    {title}
                </li>
            ))}
        </ul>
    )
}

export const Post = () => {
    return (

<PostList/>

    )};

    
export default Post