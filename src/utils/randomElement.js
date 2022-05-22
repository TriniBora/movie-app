export default function randomElement( array ) {
    const rand = Math.random() * array.length | 0;
    return array[ rand ];
}