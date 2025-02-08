import {$authHost, $host} from "./index";

export const fetchPosts = async (page) => {
    const response = await $host.get('api/post?page=' + page);
    return response.data;
}

export const fetchOnePost = async (postId) => {
    const dataPost = await $authHost.get('/api/post/' + postId);
    const dataUser = await $authHost.get('/api/post/user/' + postId);
    const dataComments = await $authHost.get('/api/post/comment/' + postId);
    return {post: dataPost, user: dataUser, comments: dataComments};
}