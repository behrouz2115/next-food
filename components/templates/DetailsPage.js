import React from "react";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

const DetailsPage = (data) => {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = data;
  return (
    <div>
      <h2>Details</h2>

      <div>
        <img src={`/images/${id}.jpeg`} alt={name} />
        <div>
          <h3>{name}</h3>
          <span>
            <Location />
            {details[0].Cuisine}
          </span>
          <span>
            <Dollar />
            <p>{price}</p>
          </span>
        </div>
      </div>
      <div>
        <p>{introduction}</p>
      </div>
      <div>
        <h4>Details</h4>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>
              <p>{Object.keys(detail)[0]}: </p>
              <span>{Object.values(detail)[0]}</span>
            </li>
          ))}
        </ul>
          </div>
          <div >
          <h4>Ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          </div>
          <div>
          <h4>Recipe</h4>
          {recipe.map((item, index) => (
            <div key={index} >
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
          </div>
          <button>Add to cart</button>
    </div>
  );
};

export default DetailsPage;
