import React from 'react';
import PreviewPost from "../components/PreviewPost";
import PostList from "../components/PostList";

const Posts = () => {

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-32">
            <PreviewPost />
            <PostList />
        </div>
    );
};

export default Posts;