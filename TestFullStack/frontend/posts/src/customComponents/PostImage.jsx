import React from 'react';
import image from '../assets/PostImage136.png';
const PostImage = ({vertical}) => {
    return (
        <div className={vertical ? "w-full mb-5":"w-1/2 mb-10"}>
            <img className="" src={image} alt="postImage" />
        </div>
    );
};

export default PostImage;