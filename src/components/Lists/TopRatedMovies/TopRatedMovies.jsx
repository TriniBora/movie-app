import React from 'react';
import useGetMoviesOrSeries from "../../../hooks/useGetMoviesOrSeries";
import { apiUrl } from "../../../api/constants";
import Carousel from "../../Carousel/Carousel";

const TopRatedMovies = () => {
    const [ data, error, loading ] = useGetMoviesOrSeries( apiUrl( "movie", "top_rated" ) );

    return (
        <>
            { data && <Carousel data={ data } title={ "Top Rated movies" } /> }
            { error && <p>{ error }</p> }
        </>
    )
}

export default TopRatedMovies