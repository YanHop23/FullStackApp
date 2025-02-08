import React from 'react';
import PostImage from "../customComponents/PostImage";
import {useNavigate} from "react-router-dom";

const PostCard = ({vertical, post}) => {
    const navigate = useNavigate();
    function truncateText(text) {
        if (text.length > 34) {
            return text.slice(0, 30) + '...';

        }
        return text;
    }
    return (
        <div className={vertical? 'w-full': 'flex '}
             onClick={() => navigate(`/post/${post.id}`)}
        >
            <PostImage vertical={vertical}  />
            <div className={vertical ? 'w-full' : 'w-1/2 '}>
                <p className={vertical?"text-xs uppercase mb-4":"uppercase mb-4"}>wednesday 12, march 2024</p>
                <h2 className="text-md font-semibold">{post.title}</h2>
                <p className={vertical? 'text-xs':''}>{truncateText(post.body)}</p>
            </div>
        </div>
    );
};

export default PostCard;