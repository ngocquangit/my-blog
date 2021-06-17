import React from 'react';
import "./register.css"

export default function Register() {
    return (
        <div className="register">
      <span className="register__Title">Đăng ký</span>
      <form className="register__Form">
        <label>Tài khoản</label>
        <input className="register__Input" type="text" placeholder="Nhập vào tài khoản..." />
        <label>Email</label>
        <input className="register__Input" type="text" placeholder="Nhập vào email..." />
        <label>Mật khẩu</label>
        <input className="register__Input" type="password" placeholder="Nhập vào mật khẩu..." />
        <label>Nhập lại mật khẩu</label>
        <input className="register__Input" type="password" placeholder="Nhập lại mật khẩu..." />
        <button className="register__Button">Đăng ký</button>
      </form>
        <button className="register__LoginButton">Đăng nhập</button>
    </div>
    )
}