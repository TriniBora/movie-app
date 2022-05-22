import React from 'react';
import MainTop from "../../components/Main/MainTop/MainTop";
import MainBody from "../../components/Main/MainBody/MainBody";

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