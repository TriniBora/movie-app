import React, { useState, useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import styles from './Header.module.css';

const Header = () => {
    const { user, setUser } = useContext( UserContext );

    const logout = () => {
        setUser( null );
    }

    return (
        <header className={ styles.container }>
            { user ?
                <>
                    <p>Bienvenidx, { user.username }!</p>
                    <button onClick={ logout }>Logout</button>
                </>
                : "" }
        </header>
    )
}

export default Header