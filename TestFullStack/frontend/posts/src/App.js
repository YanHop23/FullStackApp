import {BrowserRouter} from "react-router-dom";
import Router from "./components/Router";
import NavBar from "./components/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {check} from "./api/userApi";
import {changeAuth, setUser} from "./store/actions";
import CircularProgress from '@mui/material/CircularProgress';
import Background from "./customComponents/Background";

function App() {
    const {user} = useSelector(state => state.user);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        check().then((data)=>{
            dispatch(setUser(data));
            dispatch(changeAuth(true))
        }).finally(()=>setLoading(false));
    },[])
    if (loading) {
        return (
            <div className="flex items-center justify-center p-5 h-screen ">
                <CircularProgress color="success" />
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Background />
            <NavBar />
            <Router />
        </BrowserRouter>
    );
}

export default App;
