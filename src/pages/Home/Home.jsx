import React, { useContext } from 'react';
import useConsumeData from "../../hooks/useConsumeData";
import { apiUrl } from "../../api/constants";
import { UserContext } from "../../context/UserContext";

const Home = () => {
    const { user } = useContext( UserContext );
    const [ data, error, loading ] = useConsumeData( apiUrl.popularMovies );

    return (
        <>
                <p>Bienvenidx, { user.username }!</p>
            <div>
                { data && <ul>{ data.map( ( item, index ) => <li key={ index }>{ item.name }</li> ) }</ul> }
                { error && <p>{ error }</p> }
            </div>
        </>
    )
}

export default Home