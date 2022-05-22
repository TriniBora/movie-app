import React from "react";
import Slider from "react-slick";

import { apiImgUrl } from "../../api/constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

const Carousel = ( { data } ) => {


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        className: `${ styles.container }`,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h2> Responsive </h2>
            <Slider { ...settings } >
                { data.map( ( el, index ) => {
                    return <div key={ index }>
                        <img src={ apiImgUrl( el.poster_path, 200 ) } className={ styles.poster } alt="poster" />
                    </div>
                }
                ) }
            </Slider>
        </div>

    )
}

export default Carousel