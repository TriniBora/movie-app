import React from 'react'
import axios from "axios";

const useGetData = () => {

    const getData = async () => {
        try {
            const response = await axios.get( '/user?ID=12345' );
            console.log( response );
        } catch ( error ) {
            console.error( error );
        }
    }

    return (
        <div>useGetData</div>
    )
}

export default useGetData