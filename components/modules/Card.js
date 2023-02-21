import Link from "next/link";
import React from "react";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";
import styles from "./Card.module.css";

const Card = (foods) => {
  const { id, name, details, price,discount } = foods;

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
        {discount ? (
          <span className={styles.discount}>
            {(price * (100 - discount)) / 100}$
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? <div className={styles.badge}>{discount}%</div> : null}
          </div>
          <Link  href={`/menu/${id}`}>See Details</Link>
    </div>
  );
};

export default Card;
