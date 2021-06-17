import React from 'react';
import './Setting.css'
import Slidebar from '../../components/slidebar/Slidebar'
const Setting = () => {
    return (
        <div className="setting">
            <div className="setting__wrapper">
                <div className="setting__Title">
                    <span className="setting__updateTitle">
                        Cập nhập tài khoản
                    </span>
                    <span className="setting__deleteTitle">
                        Xóa tài khoản
                    </span>
                </div>
                <form action="" className="setting__form">
                    <label> Ảnh đại diện</label>
                    <div className="setting__pp">
                        <img src="https://picsum.photos/300/300" alt="" srcSet="" />
                        <label htmlFor="fileInput">
                            <i className="setting__icon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}} />
                    </div>
                    <label> Tài khoản</label>
                    <input type="text" name="" id="" placeholder="Tài khoản" />
                    <label> Email</label>
                    <input type="text" name="" id="" placeholder="Mail" />
                    <label> Mật khẩu</label>
                    <input type="password" name="" id="" />
                    <label> Nhập lại mật khẩu</label>
                    <input type="password" name="" id="" />
                    <button className="setting__submit">Cập nhập</button>
                </form>
            </div>
            <Slidebar/>
        </div>
    );
}

export default Setting;
