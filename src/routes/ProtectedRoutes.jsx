import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useLocation } from "react-router";
import { UserContext } from "../context/UserContext";

const ProtectedRoutes = () => {
    const { user } = useContext( UserContext );

    const location = useLocation();

    return (
        <>{ user
            ? <Outlet />
            : <Navigate to="/" replace state={ { from: location } } /> }</>
    )
}

export default ProtectedRoutes