import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {POSTS_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";


const Router = () => {
    const isAuth = useSelector(state => state.isAuthenticated);
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, element}) => (
                <Route key={path} path={path} element={element}/>
            ))}
            {publicRoutes.map(({path, element}) => (
                <Route key={path} path={path} element={element} exact/>
            ))}
            <Route
                path="*"
                element={<Navigate to={POSTS_ROUTE} replace={true} />}
            />
        </Routes>
    );
};

export default Router;