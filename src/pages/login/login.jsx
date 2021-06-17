import React from 'react';
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="login__Title">Đăng nhập</span>
      <form className="login__Form">
        <label>Email</label>
        <input className="login__Input" type="text" placeholder="Nhập vào email..." />
        <label>Mật khẩu</label>
        <input className="login__Input" type="password" placeholder="Nhập vào mật khẩu..." />
        <button className="login__Button">Đăng nhập</button>
      </form>
        <button className="login__RegisterButton">Đăng ký</button>
    </div>
  );
}