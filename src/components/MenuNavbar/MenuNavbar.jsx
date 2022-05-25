import React from 'react';

import styles from "./MenuNavbar.module.css";

const navItems = [
    { name: "Inicio", link: "/" },
    { name: "Series", link: "#" },
    { name: "Películas", link: "/" },
    { name: "Novedades populares", link: "#" },
    { name: "Mi lista", link: "#" },
    { name: "Audio y subtítulos", link: "#" },
]

const MenuNavbar = () => {
    return (
        <ul className={ styles.container }>{ navItems.map( ( item, index ) => {
            return <li key={ index } className={ styles.item }><a className={ styles.link } href={ item.link }>{ item.name }</a></li>
        } ) }
        </ul>
    )
}

export default MenuNavbar