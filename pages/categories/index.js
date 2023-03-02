import CategoriesPage from "@/components/templates/CategoriesPage";

const Categories = ({ data }) => {
  console.log(data);
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
    const difficultyResult = food.details.filter(
      (detail) => detail?.Difficulty === difficulty
        
    );

      const timeResult = food.details.filter((detail) => {
          const cookingTime = detail["Cooking Time"] || "";
          const [timeDetail] = cookingTime.split(" ");
          console.log(timeDetail);
          return (
              (time === "more" && +timeDetail > 30)||
              (time === "less" && timeDetail && +timeDetail <= 30) 
          )
      })

    return (
      (time && difficulty && timeResult.length && difficultyResult.length) ||
      (!time && difficulty && difficultyResult.length) ||
      (time && !difficulty && timeResult.length)
    );
  });

  return {
    props: {
      data: filteredData,
    },
  };
}
