import React from 'react';
import RandomMovie from "../../Lists/RandomMovie/RandomMovie";
import PopularMovies from "../../Lists/PopularMovies/PopularMovies";
import TopRatedMovies from "../../Lists/TopRatedMovies/TopRatedMovies";
import PopularSeries from "../../Lists/PopularSeries/PopularSeries";
import TopRatedSeries from "../../Lists/TopRatedSeries/TopRatedSeries";

import styles from "./MainBody.module.css";

const MainBody = () => {
    return (
        <div className={ styles.container }>
            <PopularMovies />
            <TopRatedMovies />
            <PopularSeries />
            <TopRatedSeries />
        </div>
    )
}

export default MainBody