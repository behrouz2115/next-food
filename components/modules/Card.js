import React from 'react';
import Location from '../icons/Location';
import styles from './Card.module.css';

const Card = (foods) => {
    const { id, name, details } = foods;

    return (
        <div className={styles.container}>
            <img src={`/images/${id}.jpeg`} alt={name} />
            <div className={styles.details}>
                <h4>{name}</h4>
                <div>
                   <Location/>
                    {details[0].Cuisine}
                </div>
            </div>
        </div>
    );
};

export default Card;