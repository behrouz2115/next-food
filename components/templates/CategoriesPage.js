import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Card from "../modules/Card";
import styles from './CategoriesPage.module.css';

const CategoriesPage = ({ data }) => {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: " ", time: " " });
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
    useEffect(() => {
      const { difficulty, time } = router.query;
      if (query.difficulty !== difficulty || query.time !== time) {
        setQuery({ difficulty, time });
      }
    }, []);

  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };
  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div >
        <div className={styles.select}>
          <select
            // value={router?.query?.difficulty || ""}
            value={query.difficulty}
            name="difficulty"
            onChange={changeHandler}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            // value={router?.query?.time || ""}
            value={query.time}
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
      <div className={styles.cards}>
        {!data.length ? <img src="/images/search.png" alt="Category" /> : null}
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
