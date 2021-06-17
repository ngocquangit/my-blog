import React from 'react';
import './topbar.css';

const TopBar = () => {
    return (
        <div className="topbar">
           <div className="topLeft">
               <i className="topIcon fab fa-facebook-square"></i>
               <i className="topIcon fab fa-twitter-square"></i>
               <i className="topIcon fab fa-pinterest-square"></i>
               <i className="topIcon fab fa-instagram-square"></i>
            </div>
           <div className="topCenter">
               <ul className="topList">
                   <li className="topList__item">Trang chủ</li>
                   <li className="topList__item">Về tôi</li>
                   <li className="topList__item">Liên hệ</li>
                   <li className="topList__item">Viết bài</li>
                   <li className="topList__item">Đăng xuất</li>
               </ul>
           </div>
           <div className="topRight">
               <img className="topImg" src="https://picsum.photos/300/300" alt="" srcSet="" />
               <i className="topSearchIcon fas fa-search"></i>
           </div>
        </div>
    );
}

export default TopBar;
