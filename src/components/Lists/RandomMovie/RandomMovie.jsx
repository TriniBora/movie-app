import React from 'react';

import { apiUrl } from "../../../api/constants";
import useGetMoviesOrSeries from "../../../hooks/useGetMoviesOrSeries";
import styles from "./RandomMovie.module.css";

const RandomMovie = () => {
    const [ data, error, loading, randomValue, randomImg ] = useGetMoviesOrSeries( apiUrl( "movie", "upcoming" ) );


    return (
        <div className={ styles.container }>
            { data && <img className={ styles.image } src={ randomImg } alt="Upcoming movie poster" /> }
        </div>
    )
}

export default RandomMovie