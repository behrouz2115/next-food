import React from 'react';
import Card from '../modules/Card';
import styles from './MenuPages.module.css'

const MenuPages = ({ data }) => {
    console.log(data);
    return (
        <div className={ styles.container  } >
            <h2>Menu</h2>
            <div className={styles.subContainer}>
                {
                    data.map(item => <Card key={item.id} { ...item } />)
                }
            </div>
        </div>
    );
};

export default MenuPages;