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
  console.log(query);    
const res = await fetch("https://my-server-pi.vercel.app/food-data");
const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
