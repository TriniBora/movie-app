import React from 'react';
import useGetMoviesOrSeries from "../../../hooks/useGetMoviesOrSeries";
import { apiUrl } from "../../../api/constants";
import Carousel from "../../Carousel/Carousel";

const TopRatedSeries = () => {
    const [ data, error, loading ] = useGetMoviesOrSeries( apiUrl( "tv", "top_rated" ) );

    return (
        <>
            { data && <Carousel data={ data } title={ "Top Rated series" } /> }
            { error && <p>{ error }</p> }
        </>
    )
}

export default TopRatedSeries