import React from 'react';
import styles from "./Button.module.css";

const Button = ( { icon, text, bgColor, textColor } ) => {

    const style = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
        <button style={ { "background-color": style.backgroundColor, "color": style.color } } className={ styles.container }><span class="material-icons">
            { icon }
        </span>{ text }</button>
    )
}

export default Button