import React from 'react';
import { apiUrl } from "../../../api/constants";
import useGetMoviesOrSeries from "../../../hooks/useGetMoviesOrSeries";
import styles from "./MainTop.module.css";

const MainTop = () => {
    const [ data, error, loading, randomValue, randomImg, randomTitle, randomOverview ] = useGetMoviesOrSeries( apiUrl( "movie", "upcoming" ) );


    return (
        <div className={ styles.container }>
            { data && <div className={ styles.textContainer }>
                <h1 className={ styles.title }>{ randomTitle }</h1>
                <p className={ styles.description }>{ randomOverview }</p>
            </div> }
            { data && <img className={ styles.image } src={ randomImg } alt="Upcoming movie poster" /> }
        </div>
    )
}

export default MainTop