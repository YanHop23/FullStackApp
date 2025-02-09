import React, { useState } from 'react';
import { check, registration } from "../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { changeAuth, setUser } from "../store/actions";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "@mui/material";
import { REGISTRATION_ROUTE } from "../utils/consts";
import eye from "../assets/eye.png";
import dollarImg from "../assets/dolar.png";
import flashImg from "../assets/flash.png";
import ownerImg from "../assets/owner.png";
import anutkaImg from "../assets/anutka.png";


const RegistrationForm = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Форма надіслана:', formData);
    };

    const signUp = async () => {
        setLoading(true);

        try {
            check().then(() => {
                dispatch(setUser(formData))
                dispatch(changeAuth(true))
                navigate('/posts')
            }).finally(() => setLoading(false));
        } catch (error) {
            alert(error.response.data.message);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center p-5 h-screen ">
                <CircularProgress color="success" />
            </div>
        );
    }

    return (
        <div className="border-black border-2 w-1/2  rounded-3xl flex bg-white  ">
            <form onSubmit={handleSubmit} className="m-9 w-full">
                <h1 className="text-2xl font-semibold mb-6">Sign Up</h1>

                <div>
                    <label htmlFor="email" className="text-sm">Email:</label>
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
                <div className="flex gap-6">
                    <div>
                        <label htmlFor="first_name" className="text-sm">First name:</label>
                        <input
                            className=" mb-4 mt-3 w-full px-3 py-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-300 placeholder-gray-400"
                            type="text"
                            id="username"
                            name="username"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                            placeholder="Your first name"
                        />
                    </div>

                    <div>
                        <label htmlFor="last_name" className="text-sm">Last name:</label>
                        <input
                            className=" mb-4 mt-3 w-full px-3 py-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-300 placeholder-gray-400"
                            type="text"
                            id="username"
                            name="username"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                            placeholder="Your last name"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label htmlFor="password" className="text-sm">Password:</label>
                    <input
                        className=" mb-4 mt-3 w-full px-3 py-2 border-2 border-gray-300 rounded-md text-black focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-300 placeholder-gray-400"
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
                        type="submit" onClick={signUp}>
                        Sign up
                        <ArrowForwardIcon />
                    </button>
                </div>
                <span className="flex">
                    Already have an account? <Link to="/registrarion" ><p className="text-green-500" onClick={() => {
                    navigate(REGISTRATION_ROUTE)
                }}>Sign in</p></Link>
                </span>
            </form>
            <div className="flex rounded-r-2xl justify-center flex-col bg-black w-full p-11  ">
                <h2 className="text-white text-2xl font-bold mb-4">Get Your FREE
                    30-Days Trial Now!</h2>

                <div>
                    <div className="flex">
                        <img src={dollarImg} alt=""/>
                        <h2 className="font-semibold ml-3 text-sm text-white">Absolutely FREE</h2>
                    </div>
                    <p className="text-gray-500 mb-6 ml-9" >No hidden charges, No credit card required</p>
                </div>
                <div>
                    <div className="flex">
                        <img src={flashImg} alt=""/>
                        <h2 className="font-semibold ml-3 text-sm text-white">Fast & Easy</h2>
                    </div>
                    <p className="text-gray-500 mb-6 ml-9" >Get access instantly, no downloads required</p>
                </div>
                <div>
                    <div className="flex">
                        <img src={ownerImg} alt=""/>
                        <h2 className="font-semibold ml-3 text-sm text-white">Your Own Data</h2>
                    </div>
                    <p className="text-gray-500 mb-6 ml-9" >Enjoy the Free Trial with your company data</p>
                </div>
                <div>
                    <div className="flex">
                        <img src={anutkaImg} alt=""/>
                        <h2 className="font-semibold ml-3 text-sm text-white">Unlimited FeaturesE</h2>
                    </div>
                    <p className="text-gray-500 mb-6 ml-9" >Access all features of the world's #1 business software!</p>
                </div>

            </div>
        </div>
    );
};

export default RegistrationForm;
