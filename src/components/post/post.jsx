import React from 'react';
import './post.css';
const post = () => {
    return (
        <div className="post">
            <img className="post__img" src="https://picsum.photos/300/300" alt="" srcSet="" />
            <div className="post__Info">
                <div className="post__Cats">
                    <span className="post__Cat">Âm nhạc</span>
                    <span className="post__Cat">Cuộc sống</span>
                </div>
                <span className="post__Title">
                    Lorem ipsum, dolor sit amet.
                </span>
                <hr/>
                <span className="post__date">
                    1 giờ trước
                </span>
                <p className="post__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla sequi perspiciatis assumenda non? Odit alias iusto nobis, deserunt voluptatum iure est ipsa repellendus modi reiciendis quibusdam consequuntur tempore veritatis?</p>
            </div>
        </div>
    );
}

export default post;
