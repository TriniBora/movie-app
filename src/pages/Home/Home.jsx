import React, { useContext } from 'react';
import useConsumeData from "../../hooks/useConsumeData";
import { apiUrl } from "../../api/constants";
import { UserContext } from "../../context/UserContext";

const Home = () => {

    const [ data, error, loading ] = useConsumeData( apiUrl( "movie", "popular" ) );
    console.log( apiUrl( "movie", "popular" ) );

    return (
        <>

            <div>
                { data && <ul>{ data.map( ( item, index ) => <li key={ index }>{ item.hasOwnProperty( "title" ) ? item.title : item.name }</li> ) }</ul> }
                { error && <p>{ error }</p> }
            </div>
        </>
    )
}

export default Home