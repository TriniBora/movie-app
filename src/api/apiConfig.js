import axios from "axios";

export const apiEndpoints = {

    getMoviesOrSeries: async ( url ) => {
        try {
            const res = await axios.get( url );
            return res.data.results;
        } catch ( err ) {
            return err;
        }
    },

    getById: async ( url ) => {
        try {
            const res = await axios.get( url );
            return res.data;
        } catch ( err ) {
            return err;
        }
    },

    getPoster: async ( url ) => {
        try {
            const res = await axios.get( url );
            return res;
        } catch ( err ) {
            return err;
        }
    },

}