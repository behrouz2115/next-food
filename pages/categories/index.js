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
    const difficultyResult = food.details.filter((detail) => 
      detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = food.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
        const [timeDetail] = cookingTime.split(" ");
        console.log(timeDetail);
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail > 30) {
        return detail;
      }
    });



    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return food;
    } else if (!time && difficulty && difficultyResult.length) {
      return food;
    } else if (time && !difficulty && timeResult.length) {
      return food;
    }
  });

  return {
    props: {
      data: filteredData,
    },
  };
}
