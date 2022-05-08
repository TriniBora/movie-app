import React from 'react'
import { useState } from "react";
import LoginForm from './LoginForm';

const initialUser = {
    email: "",
    password:"",
}

const Login = () => {

    const [ isLoggedIn, setIsLogginIn ] = useState( false );
    const [ user, setUser ] = useState( initialUser );
    const [ error, setError ] = useState( initialUser );

    const login = details => { 
        console.log( details );
    }

    const logout = () => { 
        console.log( "Logout" );
    }

  return (
      <>{ isLoggedIn ? <h1>Welcome { user.username }</h1> : <LoginForm login={ login } error={ error} /> }
      </>
  )
}

export default Login