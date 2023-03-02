import { useRouter } from "next/router";
import { useState } from "react";
import Card from "../modules/Card";

const CategoriesPage = ({data}) => {
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
          <div>
          {!data.length ? (
            <img src="/images/search.png" alt="Category" />
          ) : null}
              {
                  data.map(food => (
                      <Card key={food.id} {...food} />
                  ))
              }
          </div>
    </div>
  );
};

export default CategoriesPage;
