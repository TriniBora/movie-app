import React, { useState, useEffect } from 'react';
import { apiEndpoints } from '../api/apiConfig';

const useGetPoster = ( url ) => {

    const [ data, setData ] = useState( [] );
    const [ error, setError ] = useState( null );
    const [ loading, setLoading ] = useState( true );

    const getRes = async () => {

        const res = await apiEndpoints.getPoster( url );

        res instanceof Error ? setError( res.message ) : setData( res );

        setLoading( false );
    }

    useEffect( () => {

        getRes();

    }, [] )

    return [ data, error, loading ];

}

export default useGetPoster