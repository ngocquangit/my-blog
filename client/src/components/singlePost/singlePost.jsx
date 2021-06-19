import React from 'react';
import './singlePost.css';
import {Link} from 'react-router-dom';
const singlePost = ({post}) => {
    return (
        <div className="singlePost">
            <div className="singlePost__Wrapper">
                {post.photo && 
                    <img className="singlePost__img" src={post.photo} alt="" srcSet="" />
                }
            <h1 className="singlePost__title">
                {post.title}
                <div className="singlePost__edit">
                    <i className="singlePost__icon far fa-edit"></i>
                    <i className="singlePost__icon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePost__info">
                <span className="singlePost__author">Tác giả: 
                <Link to={`/?user=${post.username}`}>
                <b> {post.username}</b>
                </Link>
                </span>
                
                <span className="singlePost__date">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="singlePost__desc">
                {post.desc}
            </p>
            </div>
        </div>
    );
}

export default singlePost;
