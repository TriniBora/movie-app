import React, { useContext, useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
// import AuthContext from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import Home from "../Home/Home";

const Login = () => {

    const { user, setUser } = useContext( UserContext );
    const [ error, setError ] = useState( null );

    const login = details => {
        setUser( {
            username: details.username,
            email: details.email,
            password: details.password
        } );
    }



    return (
        <>{ user ? <><Home /></> : <LoginForm login={ login } error={ error } /> }

        </>
    )
}

export default Login