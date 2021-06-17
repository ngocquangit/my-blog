import React from 'react';
import './Slidebar.css';
const Slidebar = () => {
    return (
        <div className="Slidebar">
            <div className="Slidebar__item">
                <span className="Slidebar__title">Về tôi</span>
                <img className="Slidebar__img" src="https://picsum.photos/400/400" alt="" srcSet="" />
                <p className="Slidebar__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi odit dolor dolores amet fuga, soluta deleniti velit eum omnis quae culpa dolore quas animi </p>
            </div>
            <div className="Slidebar__item">
                <span className="Slidebar__title">Danh mục</span>
                <ul className="SlidebarList">
                    <li className="SlidebarList__item">
                        Cuộc sống
                    </li>
                    <li className="SlidebarList__item">
                        Âm nhạc
                    </li>
                    <li className="SlidebarList__item">
                        Thể thao
                    </li>
                    <li className="SlidebarList__item">
                        Phim ảnh
                    </li>
                </ul>
            </div>
            <div className="Slidebar__item">
                <span className="Slidebar__title">Theo dõi tôi</span>
                <div className="Slidebar__social">
                    <i className="SlidebarIcon fab fa-facebook-square"></i>
                    <i className="SlidebarIcon fab fa-twitter-square"></i>
                    <i className="SlidebarIcon fab fa-pinterest-square"></i>
                    <i className="SlidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>

        </div>
    );
}

export default Slidebar;
