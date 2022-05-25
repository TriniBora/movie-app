import React, { useState, useEffect } from 'react';
import { apiEndpoints } from '../api/apiConfig';
import { apiImgUrl } from "../api/constants";
import randomElement from "../utils/randomElement";
import truncateOverview from "../utils/truncateOverview";

const useGetMoviesOrSeries = ( url ) => {

    const [ data, setData ] = useState( [] );
    const [ error, setError ] = useState( null );
    const [ loading, setLoading ] = useState( true );

    const getRes = async () => {

        const res = await apiEndpoints.getMoviesOrSeries( url );

        res instanceof Error ? setError( res.message ) : setData( res );

        setLoading( false );
    }

    useEffect( () => {

        getRes();

    }, [] )

    const [ randomValue, setRandomValue ] = useState( null );
    const [ randomImg, setRandomImg ] = useState( null );
    const [ randomTitle, setRandomTitle ] = useState( null );
    const [ randomOverview, setRandomOverview ] = useState( null );

    const getRandomValue = () => {
        if ( data.length === 0 ) {
            return;
        } else {
            const selectedValue = randomElement( data );
            setRandomValue( selectedValue );
            const backgroundImage = apiImgUrl(
                selectedValue.backdrop_path,
                1280
            );
            setRandomImg( backgroundImage );
            setRandomTitle( selectedValue.title );
            const overview = truncateOverview( selectedValue.overview );
            setRandomOverview( overview );
        }
    };

    useEffect( () => {
        getRandomValue();
    }, [ data ] );

    console.log( randomValue );


    return [ data, error, loading, randomValue, randomImg, randomTitle, randomOverview ];

}

export default useGetMoviesOrSeries