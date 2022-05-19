import React, { useEffect } from 'react';

const useStorage = ( { user } ) => {

    useEffect( () => {
        // storing input username, email and password
        localStorage.setItem( "username", JSON.stringify( user.username ) );
        localStorage.setItem( "email", JSON.stringify( user.email ) );
        localStorage.setItem( "password", JSON.stringify( user.password ) );
    }, [] );
}

export default useStorage;