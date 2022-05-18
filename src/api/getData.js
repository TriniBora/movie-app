import axios from "axios";

const getData = async ( url ) => {

    try {
        const res = await axios.get( url );
        return res.data.results;
    } catch ( err ) {
        return err;
    }
}

export default getData