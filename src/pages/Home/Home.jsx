import useConsumeData from "../../hooks/useConsumeData";
import { apiUrl } from "../../api/constants";

const Home = ( { user } ) => {

    const [ data, error, loading ] = useConsumeData( apiUrl.popularMovies );

    return (
        <>
            <div>
                <p>Bienvenidx, { user.username }!</p>
                { data && <ul>{ data.map( ( item, index ) => <li key={ index }>{ item.name }</li> ) }</ul> }
                { error && <p>{ error }</p> }
            </div>
        </>
    )
}

export default Home