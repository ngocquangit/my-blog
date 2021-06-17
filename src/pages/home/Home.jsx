import React from 'react';
import HeaderComponent from '../../components/header/header'
import PostComponent from '../../components/posts/Post'
import SlidebarComponent from '../../components/slidebar/Slidebar'
import './Home.css'
const Home = () => {
    return (
        <>
        <HeaderComponent/>
        <div className="myHome">
            <PostComponent/>
            <SlidebarComponent/>
        </div>
        </>
    );
}

export default Home;
