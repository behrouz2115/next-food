import React from "react";

const Details = () => {
  return <div>Details</div>;
};

export default Details;

export async function getStaticPaths() {
  const res = await fetch("https://my-server-pi.vercel.app/food-data");
  const jsonData = await res.json();
  const data = jsonData.slice(0, 10);
  const path = data.map((food) => {
    params: {
      id: food.id.toString();
    }
  });
    return {
        path,
        fallback:true
    }
}
