import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import MenuNavbar from "../MenuNavbar/MenuNavbar";
import Logo from "../../assets/img/Netflix-Logo.png";
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
                <div className={ styles.navLogo }><img className={ styles.logo } src={ Logo } alt="logo" /></div>
                { user ? <div className={ styles.navUser }>
                    <div className={ styles.navbar }><MenuNavbar /></div>
                    <div className={ styles.user }>
                        <button onClick={ logout }><img className={ styles.avatar } src={ Avatar } alt="avatar" /></button>
                    </div>
                </div>
                    : "" }
            </>
        </header>
    )
}

export default Header