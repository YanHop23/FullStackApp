import {ADD_POSTS, CHANGE_AUTH, SET_ONE_POST, SET_POSTS, SET_USER} from "./actions";

const initialState = {
    isAuthenticated: false,
    user: {

    },
    posts: {
        postPage: 4,
        allPosts: [
            { id: 1,userId: 96,  title: 'quaerat velit veniam amet cupiditate aut numquam ut sequi', body: 'in non odio excepturi sint eum labore voluptates vitae quia qui et'},
        ],
    },
    currentPost: {
        post: {},
        comments: {},
        userPost: {},
    },
}

export const reducers = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_AUTH:
            return {
                ...state,
                isAuthenticated: !!action.payload.isAuth
            };
            case SET_USER:
                return {
                    ...state,
                    user: action.payload.user
                }
        case SET_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    allPosts: action.payload.posts,
                },
            };

        case ADD_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    allPosts: [
                        ...state.posts.allPosts,
                        ...action.payload.posts,
                    ],
                },
            };
        case SET_ONE_POST:
            return {
                ...state,
                currentPost: {
                    ...state.currentPost,
                    post: action.payload.post,
                    comments: action.payload.comments,
                    userPost: action.payload.userPost,
                },
            };
        default:
            return state;
    }
}