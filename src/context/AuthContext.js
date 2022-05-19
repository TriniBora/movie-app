import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const initialAuth = null;

const AuthProvider = ( { loggedIn, children } ) => {
    const [ auth, setAuth ] = useState( initialAuth );

    const handleAuth = ( loggedIn ) => {
        loggedIn ? setAuth( true ) : setAuth( false )
    }

    const data = { auth, handleAuth };

    return (
        <AuthContext.Provider value={ data }>{ children }</AuthContext.Provider>
    )
}
export default AuthContext