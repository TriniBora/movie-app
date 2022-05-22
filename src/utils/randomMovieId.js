
import { apiUrl } from "../api/constants";
import randomElement from "./randomElement";

const randomMovieId = ( data ) => {

    const idValues = Object.values( Array.from( data ).map( el => el.id ) );
    return data ? randomElement( idValues ) : 200;
}

export default randomMovieId