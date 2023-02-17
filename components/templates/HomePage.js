import React from 'react';
import Attributes from '../modules/Attributes';
import Banner from '../modules/Banner';
import Definition from '../modules/Definition';
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner /> 
            <Attributes />
            <Definition/>
        </div>
    );
};

export default HomePage;