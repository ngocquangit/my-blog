import React from 'react';
import './write.css'
const write = () => {
    return (
        <div className="write">
            <img className="write__img" 
            src="https://picsum.photos/900/400" alt="" srcSet="" />
            <form className="writeForm">
                <div className="writeForm__group">
                    <label htmlFor="fileInput">
                        <i className="writeForm__icon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}}/>
                    <input type="text" placeholder="Tiêu đề" className="writeForm__input" autoFocus={true} />
                </div>
                <div className="writeForm__group">
                    <textarea placeholder="Nhập vào nội dung....." type="text"
                    className= "writeForm__input writeForm__text"></textarea>
                </div>
                <button className="writeForm__submit"> Đăng bài</button>
            </form>
        </div>
    );
}

export default write;
