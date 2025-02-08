import React, { useState } from 'react';
import {check, login} from "../api/userApi";
import {useDispatch} from "react-redux";
import {changeAuth, setUser} from "../store/actions";
import CircularProgress from "@mui/material/CircularProgress";
import {useNavigate} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from "@mui/material";
import {REGISTRATION_ROUTE} from "../utils/consts";
import eye from "../assets/eye.png";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Дані для входу:', formData);
    };

    const signIn = async () => {
            setLoading(true);
        try {
            check().then(()=>{
                dispatch(setUser({email: formData.email, password: formData.password}));
                dispatch(changeAuth(true))
                navigate('/posts')
            }).finally(()=>setLoading(false));
        } catch (error) {
            alert(error.response.data.message);
            setLoading(false);

        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center p-5 h-screen ">
                <CircularProgress color="success" />
            </div>
        )
    }

    return (
        <div className="border-black border-2 w-1/2  rounded-3xl flex bg-white  ">
            <form onSubmit={handleSubmit} className="m-9 w-full">
                <h1 className="text-2xl font-semibold mb-6">Sign In</h1>
                <div >
                    <label htmlFor="email" className="text-sm ">Email address:</label>
                    <br/>
                    <input
                        className=" mb-4 mt-3 w-full px-3 py-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-300 placeholder-gray-400"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your email address"
                    />
                </div>

                <div className="relative">
                    <label htmlFor="password" className="text-sm">Password:</label>
                    <input
                        className="mb-4 mt-3 w-full px-3 py-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-300 placeholder-gray-400"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)} // Перемикаємо видимість паролю
                        className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-500"
                    >
                        <img src={eye} alt=""/>
                    </button>
                </div>

                <p className="text-green-500 mb-8">Forgot password?</p>

                <div>
                    <button
                        className=" mb-8 bg-green-500 rounded-md text-white w-full flex justify-between px-6 py-4"
                        type="submit" onClick={signIn}>Sign in
                        <ArrowForwardIcon />
                    </button>
                </div>
                <span className="flex">
                    Don't have an account? <Link to="/registrarion" ><p className="text-green-500" onClick={()=> {
                    navigate(REGISTRATION_ROUTE)
                }}>Sign up</p></Link>
                </span>
            </form>
            <div className="flex items-center rounded-r-2xl justify-center flex-col bg-black w-full p-11  ">
                <h2 className="text-white text-2xl font-bold mb-4">Kodix <span className="font-medium text-sm border-2 p-1 text-green-500 rounded-md border-green-500">PRO</span></h2>
                <p className="text-gray-500 mb-6 text-center" >Unlimited traffic, strategic support, and AI-driven upsells</p>
                <a href="#" className="text-green-500 text-xl underline">Learn more</a>
            </div>
        </div>
    );
};

export default LoginForm;
