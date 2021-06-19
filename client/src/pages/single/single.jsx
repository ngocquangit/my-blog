import React,{ useEffect, useState }  from 'react';
import './single.css';
import Slidebar from '../../components/slidebar/Slidebar';
import SinglePost from '../../components/singlePost/singlePost';
import {useLocation} from 'react-router';
import axios from 'axios';
const Single = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPost] = useState({});
    useEffect(() =>{
        const getPost = async() => {
            const res = await axios.get("/posts/"+ path );
            setPost(res.data);
        }
        getPost();
    },[path])
    return (
        <div className="Single">
            <SinglePost post={post}/>
            <Slidebar/>
        </div>
    );
}

export default Single;
