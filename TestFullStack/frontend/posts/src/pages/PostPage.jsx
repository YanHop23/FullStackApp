import React, {useEffect, useState} from 'react';
import Post from "../components/Post";
import PostCard from "../components/PostCard";
import {Pagination} from "@mui/material";
import {useDispatch} from "react-redux";
import {fetchPosts} from "../api/postApi";
import {setPosts} from "../store/actions";

const PostPage = () => {
    const [page, setPage] = useState(0);
    const [currentPosts, setCurrentPosts] = useState({
        posts: [],
    });

    const dispatch = useDispatch();

    const changePage = (newPage) => {
        setPage(newPage);
        fetchPosts(newPage).then((data) => {
            dispatch(setPosts(data.posts));
            setCurrentPosts(data);
        })
    }

    useEffect(() => {
        fetchPosts(1).then((data) => {
            dispatch(setPosts(data.posts));
            setCurrentPosts(data);
        })
    },[])
    return (
        <div className="max-w-6xl mx-auto items-center">
            <Post />
            <div className="flex justify-center bg-white rounded-xl gap-5 p-4 mb-5 ">

                {
                    currentPosts.posts.map((post) => (
                        <PostCard key={post.id} post={post} vertical={true} />
                    ))
                }
            </div>
            <div className="flex justify-center">
                <Pagination
                    count={currentPosts.totalPages}
                    page={page}
                    onChange={(_, newPage) => {
                        changePage(newPage);
                    }}
                    variant="outlined"
                    shape="rounded"
                />
            </div>
        </div>
    );
};

export default PostPage;