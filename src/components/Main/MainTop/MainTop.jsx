import React from 'react';
import { apiUrl } from "../../../api/constants";
import useGetMoviesOrSeries from "../../../hooks/useGetMoviesOrSeries";
import Button from "../../Button/Button";

import styles from "./MainTop.module.css";

const MainTop = () => {
    const [ data, error, loading, randomValue, randomImg, randomTitle, randomOverview ] = useGetMoviesOrSeries( apiUrl( "movie", "upcoming" ) );


    return (
        <div className={ styles.container }>
            { data && <div className={ styles.textContainer }>
                <h1 className={ styles.title }>{ randomTitle }</h1>
                <p className={ styles.description }>{ randomOverview }</p>
                <div className={ styles.cta }>
                    <Button icon="play_arrow" text="Reproducir" bgColor="#fff" textColor="#000" />
                    <Button icon="info" text="Reproducir" bgColor="rgba(0,0,0,0.5)" textColor="#fff" />
                </div>
            </div> }
            { data && <img className={ styles.image } src={ randomImg } alt="Upcoming movie poster" /> }
        </div>
    )
}

export default MainTop