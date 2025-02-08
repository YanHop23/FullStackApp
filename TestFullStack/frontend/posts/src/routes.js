import {LOGIN_ROUTE, POST_ROUTE, POSTS_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Posts from "./pages/Posts";
import Auth from "./pages/Auth";
import PostPage from "./pages/PostPage";

export const authRoutes = [
    {
        path: POST_ROUTE,
        element: <PostPage />
    }
]
export const publicRoutes = [
    {
        path: POSTS_ROUTE,
        element: <Posts />
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },
]