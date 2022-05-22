import React from 'react';
import useGetMoviesOrSeries from "../../../hooks/useGetMoviesOrSeries";
import { apiUrl } from "../../../api/constants";
import Carousel from "../../Carousel/Carousel";

const PopularSeries = () => {
    const [ data, error, loading ] = useGetMoviesOrSeries( apiUrl( "tv", "popular" ) );

    return (
        <>
            { data && <Carousel data={ data } title={ "Popular series" } /> }
            { error && <p>{ error }</p> }
        </>
    )
}

export default PopularSeries