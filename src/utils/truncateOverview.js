const truncateOverview = ( string ) => {
    if ( string.length > 100 ) {
        const firstPoint = string.indexOf( '.' );
        return string.substring( 0, firstPoint + 1 );
    }
    return string;
}

export default truncateOverview