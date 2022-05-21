import React from 'react';
import useGetMoviesOrSeries from "../../hooks/useGetMoviesOrSeries";
import { apiUrl } from "../../api/constants";
import Carousel from "../Carousel/Carousel";

const MainBody = () => {
    const [ data, error, loading ] = useGetMoviesOrSeries( apiUrl( "movie", "popular" ) );

    return (
        <>
        <div>
            { data && <ul>{ data.map( ( item, index ) => <li key={ index }>{ item.hasOwnProperty( "title" ) ? item.title : item.name }</li> ) }</ul> }
            { error && <p>{ error }</p> }
            </div>
            <Carousel />
        </>
    )
}

export default MainBody