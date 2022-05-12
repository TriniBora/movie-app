import React from 'react'
import { useState } from "react";
import LoginForm from '../../components/LoginForm/LoginForm';


const initialUser = {
    username: "",
    email: "",
    password: "",
}

const Login = () => {

    const [ isLoggedIn, setIsLogginIn ] = useState( false );
    const [ user, setUser ] = useState( initialUser );
    const [ error, setError ] = useState( "" );

    const login = details => {
        console.log( details );
        setUser( {
            username: details.username,
            email: details.email,
            password: details.password
        } );
        setIsLogginIn( true );
    }

    const logout = () => {
        console.log( "Logout" );
        setUser( initialUser );
        setIsLogginIn( false );
    }

    return (
        <>{ isLoggedIn ? <><h1>Welcome { user.username }</h1><button onClick={ logout }>Logout</button></> : <LoginForm login={ login } error={ error } /> }
        </>
    )
}

export default Login