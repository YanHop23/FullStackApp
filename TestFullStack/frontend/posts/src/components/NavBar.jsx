import React from 'react';
import logo from '../assets/logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {changeAuth, setUser} from "../store/actions";
import {LOGIN_ROUTE, POSTS_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const isAuth = useSelector((state) => state.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(setUser({}));
        dispatch(changeAuth(false))
    }

    return (
        <div className="flex items-center justify-between p-4 py-8 border-b-2 w-screen px-24">
            <nav className="text-center">
                <ul className="flex justify-center space-x-8">
                    <li className="text-sm font-medium hover:text-green-500" onClick={()=>{
                    navigate(POSTS_ROUTE)
                    }
                    }><a href="#">Home</a></li>
                    <li className="text-sm font-medium hover:text-green-500" onClick={()=>{
                    navigate(POSTS_ROUTE)
                    }
                    }><a href="#">Feature</a></li>
                    <li className="text-sm font-bold hover:text-green-500" onClick={()=>{
                        navigate(POSTS_ROUTE)

                    }}><a href="#">Blog</a></li>
                    <li className="text-sm font-medium hover:text-green-500" onClick={()=>{
                        navigate(POSTS_ROUTE)

                    }}><a href="#">Testimonials</a></li>
                </ul>
            </nav>
            <img src={logo} alt="logo" className="h-8" />
            <div className="flex space-x-4">
                {!isAuth ? (
                    <>
                        <button
                            onClick={() => {
                                navigate(LOGIN_ROUTE);
                            }}
                            className="font-semibold px-12 py-2 bg-green-700 text-white rounded-3xl hover:bg-green-700">
                            Login
                        </button>
                        <button
                            onClick={() => {
                               navigate(REGISTRATION_ROUTE);
                            }}
                            className="font-semibold px-12 py-2 border border-green-700 text-green-500 rounded-3xl hover:bg-green-700 hover:text-white">
                            Sign Up
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="font-semibold ml-28 px-12 py-2 border border-green-700 text-green-500 rounded-3xl hover:bg-green-700 hover:text-white"
                            onClick={logout}
                        >
                            Log out
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;
