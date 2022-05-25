import React, { useState, useEffect } from 'react';
import { apiEndpoints } from '../api/apiConfig';
import { apiImgUrl } from "../api/constants";
import randomNumber from "../utils/randomNumber";

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
            const selectedValue = data[ randomNumber( 0, data.length - 1 ) ];
            setRandomValue( selectedValue );
            const backgroundImage = apiImgUrl(
                selectedValue.backdrop_path,
                1280
            );
            setRandomImg( backgroundImage );
            setRandomTitle( selectedValue.title );
            setRandomOverview( selectedValue.overview );
        }
    };

    useEffect( () => {
        getRandomValue();
    }, [ data ] );

    console.log( randomValue );


    return [ data, error, loading, randomValue, randomImg, randomTitle, randomOverview ];

}

export default useGetMoviesOrSeries