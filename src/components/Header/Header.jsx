import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import Avatar from "../../assets/img/profile.png";
import styles from './Header.module.css';

const Header = () => {
    const { user, setUser } = useContext( UserContext );

    const logout = () => {
        setUser( null );
    }

    return (
        <header className={ styles.container }>

                <>
                    <div className={ styles.logo } />
                    <div className={ styles.user }>
                    { user ? <>
                        <button onClick={ logout }><img className={ styles.avatar } src={ Avatar } alt="avatar" /></button>
                    </>
                        : "" }
                </div>
            </>
        </header>
    )
}

export default Header