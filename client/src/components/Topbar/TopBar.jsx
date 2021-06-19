import React from 'react';
import './topbar.css';
import {
    Link
  } from "react-router-dom";

const TopBar = () => {
    const user = true;
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
                   <li className="topList__item"><Link to="/">Trang chủ</Link></li>
                   <li className="topList__item"><Link to="/">Về tôi</Link></li>
                   <li className="topList__item"><Link to="/">Liên hệ</Link></li>
                   <li className="topList__item">{user &&<Link to="/write">Viết bài</Link>}</li>
                   <li className="topList__item">{user && "Đăng xuất"}</li>
               </ul>
           </div>
           <div className="topRight">
               {user ? 
               (<img className="topImg" src="https://picsum.photos/300/300" alt="" srcSet="" />)
                :
                (
                <>
                    <li className="topList__item"><Link to="/login">Đăng nhập</Link></li>
                   <li className="topList__item"><Link to="/register">Đăng ký</Link></li>
                </>
                )
                }
               
               <i className="topSearchIcon fas fa-search"></i>
           </div>
        </div>
    );
}

export default TopBar;
