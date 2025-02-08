import React from 'react';
import {useLocation} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Auth = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div className="flex w-full h-screen justify-center items-center">
            {location.pathname === "/login" ?
                <LoginForm />
            :
                <RegisterForm />
            }
        </div>
    );
};

export default Auth;