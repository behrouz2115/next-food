import CategoriesPage from "@/components/templates/CategoriesPage";

const Categories = () => {
  return (
    <div>
      <CategoriesPage />
    </div>
  );
};

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  console.log(context.query);
  const res = await fetch("https://my-server-pi.vercel.app/food-data");
    const data = await res.json();
    
    const filteredData = data.filter((food) => {
      
    food.details.filter((detail) => {
      const defficultyResult =
        detail.Difficulty & (detail.Difficulty === difficulty);
    });
  });
  return {
    props: {
      data,
    },
  };
}
