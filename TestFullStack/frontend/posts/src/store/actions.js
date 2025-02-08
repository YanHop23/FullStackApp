export const CHANGE_AUTH = 'CHANGE_AUTH'
export const SET_USER = 'SET_USER'
export const SET_POSTS = "SET_POSTS";
export const ADD_POSTS = "ADD_POSTS";
export const SET_ONE_POST = "SET_ONE_POST";
export const SET_COMMENTS = "SET_COMMENTS";


export const changeAuth = (isAuth) => ({
    type: CHANGE_AUTH,
    payload: {isAuth}
})
export const setUser = (user) => ({
    type: CHANGE_AUTH,
    payload: {user}
})

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: { posts },
});
export const addPosts = (posts) => ({
    type: ADD_POSTS,
    payload: { posts },
});

export const setOnePosts = (post, user, comments) => ({
    type: SET_ONE_POST,
    payload: { post, user, comments },
});

