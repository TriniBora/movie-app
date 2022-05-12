import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import ProtectedRoutes from "../routes/ProtectedRoutes";

const Views = () => {
    return (
        <Routes>
            <Route path="/" element={ <Login /> } />
            <Route element={ <ProtectedRoutes /> }>
                <Route path="home" element={ <Home /> } />
            </Route>
        </Routes>
    )
}

export default Views