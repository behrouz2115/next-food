import Link from "next/link";
import React from "react";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./Card.module.css";

const Card = (foods) => {
  const { id, name, details, price } = foods;

  return (
    <div className={styles.container}>
      <img src={`/images/${id}.jpeg`} alt={name} />
      <div className={styles.details}>
        <h4>{name}</h4>
        <div>
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={styles.price}>
        <Dollar />
        <span>{price}$</span>
          </div>
          <Link href='#'>See Details</Link>
    </div>
  );
};

export default Card;
