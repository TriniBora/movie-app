const baseUrl = `https://api.themoviedb.org/3/`;

const imgBaseUrl = `https://image.tmdb.org/t/p`;

const apiKey = `ad39e3389deecacb24412a4ad52e250f`;

export const apiUrl = ( category, subcategoryOrId ) => {
    //category: movie, tv
    //subcategory: popular, top_rated, upcoming (only for movie), latest (only for tv)
    //id: movie id, tv id
    return `${ baseUrl }${ category }/${ subcategoryOrId }?api_key=${ apiKey }`;
}

export const apiImgUrl = ( posterPath ) => {
    return `${ imgBaseUrl }/w500${ posterPath }`;
}

