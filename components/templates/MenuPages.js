import React from 'react';
import styles from './MenuPages.module.css'

const MenuPages = ({ data }) => {
    console.log(data);
    return (
        <div className={ styles.container  } >
            <h2>Menu</h2>
            <div className={styles.subContainer}>
                {
                    data.map(item => <p key={item.key}>{ item.name }</p>)
                }
            </div>
        </div>
    );
};

export default MenuPages;