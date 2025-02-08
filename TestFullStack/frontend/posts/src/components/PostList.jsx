import React, {useEffect, useState} from 'react';
import PostCard from "./PostCard";
import {fetchPosts} from "../api/postApi";
import {useDispatch} from "react-redux";
import {addPosts, setPosts} from "../store/actions";
import documentImg from "../assets/document.png"


const PostList = () => {
    const [currentPosts, setCurrentPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    const showMore = () =>{
        let page = currentPage + 1;
        fetchPosts(page).then((data) => {
            debugger

            dispatch(addPosts(data.posts));
            setCurrentPosts(prevPosts => [
                ...prevPosts,
                ...data.posts
            ]);

        })
    }
    useEffect(() => {
        fetchPosts(1).then((data) => {
            dispatch(setPosts(data.posts));
            setCurrentPosts(data.posts);
        })
    },[])
    return (
        <div className="p-3">
            <div className="flex justify-between mb-8 items-center">
                    <h2 className="flex w-full">
                        <img src={documentImg} className="w-5 h-5" alt="document" />
                        Related Articles</h2>
                    <button
                        className="font-semibold bg-white px-12 py-2 w-full text-black rounded-3xl ">
                    Read More</button>
            </div>
            {
                currentPosts.map((post) => (
                    <PostCard key={post.id} post={post} vertical={false} />
                ))
            }

            <div className="flex justify-center " onClick={showMore}><button className=" px-8 py-4 cursor-pointer bg-green-500 text-white rounded-xl ">Show more</button></div>
        </div>
    );
};

export default PostList;