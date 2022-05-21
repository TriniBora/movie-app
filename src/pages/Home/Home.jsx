import React from 'react';
import MainBody from "../../components/MainBody/MainBody";
import MainTop from "../../components/MainTop/MainTop";

import styles from "./Home.module.css";

const Home = () => {



    return (
        <section className={ styles.container } >
            <MainTop />
            <MainBody />
        </section>
    )
}

export default Home