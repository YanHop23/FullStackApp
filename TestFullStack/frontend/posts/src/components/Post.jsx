import React, { useEffect, useState } from 'react';
import { fetchOnePost } from "../api/postApi";
import { setOnePosts } from "../store/actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Comments from "./Comments";
import image from '../assets/BigImage.png';
import star from "../assets/star.png";
import fecebok from "../assets/fecebook.png";
import x from "../assets/x.png";
import youtube from "../assets/youtube.png";

const Post = () => {
    const [post, setPost] = useState({
        post: { data: {} },
        user: { data: [] },
        comments: { data: [] }
    });
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        fetchOnePost(params.Id).then((data) => {
            dispatch(setOnePosts(data.post, data.user, data.comments));
            setPost(data);
            setLoading(false);
        });
    }, [params.Id]);  // додано залежність для params.Id

    if (loading) {
        return (
            <div className="flex items-center justify-center p-5 h-screen ">
                <CircularProgress color="success" />
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center p-5">
            <p className="flex font-medium text-xl items-center justify-center p-5">
                <img className="w-5 h-5 mr-2" src={star} alt="star" />
                Featured
            </p>
            <h1 className="flex justify-center font-semibold text-3xl">{post.post.data.title}</h1>
            <p className="font-normal text-black opacity-50 mb-8">{post.post.data.body}</p>
            <div className="flex grid-cols-2 mx-auto">
                <p className="font-semibold mr-1 mt-2 uppercase">wednesday 12, march 2024</p>
                <div className="mb-5 bg-white border-2 min-w-2 items-center p-1 rounded-3xl flex">
                    <div className="bg-gray-400 w-8 h-8 rounded-3xl contain-content mr-1">.</div>
                    <p>{post.user.data[0]?.name || 'Unknown User'}</p> {/* Додано безпечне звернення до користувача */}
                </div>
            </div>
            <img src={image} alt="bigImage" />
            <div className="flex gap-3 items-center text-center py-2">
                Share to
                <img src={fecebok} alt="facebook" />
                <img src={x} alt="x" />
                <img src={youtube} alt="youtube" />
            </div>
            <div>
                {post.comments.data.map((comment) => (
                    <Comments key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
};

export default Post;
