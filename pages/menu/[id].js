import { useRouter } from "next/router";
import React from "react";

const Details = ({ data }) => {
    const router = useRouter();
    console.log(data);
    if (router.isFallback) {
        return <h2>Loading ...</h2>
    }
    return <div>Details</div>;

};

export default Details;

export async function getStaticPaths() {
  const res = await fetch("https://my-server-pi.vercel.app/food-data");
  const jsonData = await res.json();
  const data = jsonData.slice(0, 10);
  const paths = data.map((food) => ({
    params: {
      id: food.id.toString(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
}
// export async function getStaticPaths() {
//     const res = await fetch('https://my-server-pi.vercel.app/food-data');
//     const json = await res.json();
//     const data = json.slice(0, 10);
  
//     const paths = data.map((food) => ({
//       params: { id: food.id.toString() },
//     }));
  
//     return {
//       paths,
//       fallback: true,
//     };
//   }
export async function getStaticProps(context) {
    const { params } = context;
    console.log(params);
  const res = await fetch(`https://my-server-pi.vercel.app/food-data/${params.id}`);
  const data = await res.json();
//   console.log(data);
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
    revalidate: 20,
  };
}
