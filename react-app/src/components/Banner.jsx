/* eslint-disable no-unused-vars */
import styles from './Banner.module.css';
import React from 'react';

function Banner() {

    return(
        <header className="">
            <div className={styles.img_div}>
                <img src="./src/assets/react.svg" alt="logo"/>
            </div>
            <div className={styles.header_text_div}>
                Providing houses all over the world
            </div>
        </header>
    );
}

export default Banner;