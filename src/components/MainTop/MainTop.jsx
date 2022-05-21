import React from 'react';
import useGetById from "../../hooks/useGetById";
import useGePoster from "../../hooks/useGetPoster";
import { apiUrl, apiImgUrl } from "../../api/constants";

import styles from "./MainTop.module.css";

const MainTop = () => {
    const [ data, error, loading ] = useGetById( apiUrl( "movie", "280" ) );
    const posterUrl = apiImgUrl( data.poster_path );

    return (
        <div className={ styles.container }>
            { data && <img src={ posterUrl } alt="poster" /> }
        </div>
    )
}

export default MainTop