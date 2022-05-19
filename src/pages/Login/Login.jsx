import React, { useContext, useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
// import AuthContext from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import Home from "../Home/Home";

const Login = () => {

    const { user, setUser } = useContext( UserContext );
    const [ error, setError ] = useState( null );
    const [ isLoggedIn, setIsLoggedIn ] = useState( false );
    // const [ auth, handleAuth ] = useContext( AuthContext );


    const login = details => {
        setUser( {
            username: details.username,
            email: details.email,
            password: details.password
        } );
        setIsLoggedIn( true );
        // handleAuth( true );
    }

    const logout = () => {
        setUser( null );
        setIsLoggedIn( false );
        // handleAuth( false );
    }

    return (
        <>{ isLoggedIn ? <><h1>Welcome</h1><button onClick={ logout }>Logout</button><Home /></> : <LoginForm login={ login } error={ error } /> }

        </>
    )
}

export default Login