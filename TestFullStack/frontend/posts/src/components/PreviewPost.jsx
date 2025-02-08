import React from 'react';
import image from '../assets/PostImage.png';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import fecebok from '../assets/fecebook.png'
import x from '../assets/x.png'
import youtube from '../assets/youtube.png'


const PreviewPost = () => {
    const post = useSelector(state => state.posts.allPosts[0])
    const navigate = useNavigate();

    return (
        <div className="mt-8 cursor-pointer" onClick={() => navigate('/post/' + post.id)}>
            <h1 className="font-semibold text-3xl mb-2">{post.title}</h1>
            <p className="font-normal mb-6">{post.body}</p>
            <div className="grid grid-cols-2 mx-auto">
                <p className="font-semibold mr-1 mt-2 uppercase" >wednesday 12, march 2024</p>
                <div className=" mb-5 bg-white border-2  items-center p-1 w-32 rounded-3xl flex">
                    <div className="bg-gray-400 w-8 h-8 rounded-3xl contain-content mr-1">.</div>
                    <p className="font-medium">John Doe</p>
                </div>
            </div>
            <img className="mb-5" src={image} alt="post image" />
            <div className="flex gap-3 items-center text-center py-2">
                Share to
                <img src={fecebok} alt="fecebok" />
                <img src={x} alt="x" />
                <img src={youtube} alt="youtube" />
            </div>
        </div>
    );
};

export default PreviewPost;