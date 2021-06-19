import React from 'react';
import './post.css';
import {Link} from 'react-router-dom'
const post = ({post}) => {
    return (
        <div className="post">
            {post.photo && 
                <img className="post__img" src={post.photo} alt="" srcSet="" />
            }
            <div className="post__Info">
                <div className="post__Cats">
                    {post.categories.map(c =>(
                        <span className="post__Cat">{c.name}</span>
                    ))}
                </div>
                <Link className="post__Title" to={`/post/${post._id}`}>
                <span>
                    {post.title}
                </span>
                </Link>
                <hr/>
                <span className="post__date">
                    {new Date(post.createdAt).toDateString()}
                </span>
                <p className="post__desc">{post.desc}</p>
            </div>
        </div>
    );
}

export default post;
