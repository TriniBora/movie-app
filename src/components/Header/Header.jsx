import React, { useContext } from 'react';
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
                    <div className={ styles.logo } />
                    <div className={ styles.user }>
                    <p>Bienvenidx, { user.username }!</p>
                        <button onClick={ logout }>Logout</button>
                    </div>
                </>
                : "" }
        </header>
    )
}

export default Header