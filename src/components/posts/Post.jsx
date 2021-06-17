import React from 'react';
import './Post.css';
import PostComponent from '../post/post';
const Post = () => {
    return (
        <div className="Post">
            <PostComponent/>
            <PostComponent/>
            <PostComponent/>
            <PostComponent/>
        </div>
    );
}

export default Post;
