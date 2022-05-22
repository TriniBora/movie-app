import React from "react";
import Slider from "react-slick";

import { apiImgUrl } from "../../api/constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

const Carousel = ( { data, title } ) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 10,
        initialSlide: 0,
        className: `${ styles.container }`,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 10,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 10,
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
            <h2 className={ styles.title }> { title } </h2>
            <div>
                <Slider { ...settings } >
                    { data.map( ( el ) => {
                        return <div key={ el.id }>
                        <img src={ apiImgUrl( el.poster_path, 200 ) } className={ styles.poster } alt="poster" />
                    </div>
                }
                ) }
                </Slider>
        </div>
        </div >

    )
}

export default Carousel