const baseUrl = process.env.REACT_APP_API;

const imgBaseUrl = process.env.REACT_APP_IMG;

const apiKey = process.env.REACT_APP_KEY;

export const apiUrl = ( category, subcategoryOrId ) => {
    //category: movie, tv
    //subcategory: popular, top_rated, upcoming (only for movie), latest (only for tv)
    //id: movie id, tv id
    return `${ baseUrl }${ category }/${ subcategoryOrId }?api_key=${ apiKey }`;
}

export const apiImgUrl = ( posterPath, width ) => {
    return `${ imgBaseUrl }/w${ width }${ posterPath }`;
}

