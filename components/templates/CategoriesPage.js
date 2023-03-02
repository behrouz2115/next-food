import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: " ", time: " " });
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };
  console.log(router.query?.difficulty);
  return (
    <div>
      <h2>Categories</h2>
      <div>
        <div>
          <select
            value={router?.query?.difficulty || ""}
            name="difficulty"
            onChange={changeHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            value={router?.query?.time || ""}
            name="time"
            onChange={changeHandler}
          >
            <option value="">Cooking Time</option>
            <option value="more">More than 30 min</option>
            <option value="less">Less than 30 min</option>
          </select>
          <button onClick={searchHandler}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
