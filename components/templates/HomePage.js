import React from 'react';
import Banner from '../modules/Banner';
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner/> 
        </div>
    );
};

export default HomePage;