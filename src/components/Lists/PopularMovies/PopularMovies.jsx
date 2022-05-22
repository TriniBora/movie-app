import React from 'react';
import useGetMoviesOrSeries from "../../../hooks/useGetMoviesOrSeries";
import { apiUrl } from "../../../api/constants";
import Carousel from "../../Carousel/Carousel";

const PopularMovies = () => {
    const [ data, error, loading ] = useGetMoviesOrSeries( apiUrl( "movie", "popular" ) );


    return (
        <>
            { data && <Carousel data={ data } title={ "Popular movies" } /> }
            { error && <p>{ error }</p> }
        </>
    )
}

export default PopularMovies