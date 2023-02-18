import React from 'react';
import Attributes from '../modules/Attributes';
import Banner from '../modules/Banner';
import Companies from '../modules/Companies';
import Definition from '../modules/Definition';
import Guide from '../modules/Guide';
import Instruction from '../modules/Instrction';
import styles from './HomePage.module.css'
import Restrictions from './Restrictions';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner /> 
            <Attributes />
            <Definition />
            <Companies />
            <Instruction />
            <Guide />
            <Restrictions/>
        </div>
    );
};

export default HomePage;