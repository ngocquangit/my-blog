import React from 'react';
import './singlePost.css';
const singlePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePost__Wrapper">
                <img className="singlePost__img" src="https://picsum.photos/900/400" alt="" srcSet="" />
            
            <h1 className="singlePost__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <div className="singlePost__edit">
                    <i className="singlePost__icon far fa-edit"></i>
                    <i className="singlePost__icon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePost__info">
                <span className="singlePost__author">Tác giả: <b>Nguyễn Ngọc Quang</b></span>
                <span className="singlePost__date">1 giờ trước</span>
            </div>
            <p className="singlePost__desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore placeat explicabo architecto perferendis, error natus recusandae esse corrupti provident ipsam praesentium temporibus quam. Aperiam quibusdam, commodi obcaecati modi sunt exercitationem?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore illum consequuntur corrupti consectetur possimus, enim ratione ex. Molestias ad omnis id. Alias doloribus esse aperiam molestiae quasi repellat corporis cumque!

            </p>
            </div>
        </div>
    );
}

export default singlePost;
