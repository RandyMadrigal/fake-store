import { useEffect, useState } from "react";
import { getCategories } from "../services/Api";

const Filter = ({ handleClick }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        console.log(err);
        throw err;
      }
    };
    getData();
  }, []);

  return (
    <>
      <button
        onClick={handleClick}
        className="rounded-2xl p-2 uppercase text-white font-bold"
      >
        All
      </button>
      {categories.length > 0 &&
        categories.map((category) => (
          <div key={category} className="flex flex-row">
            <div className="bg-indigo-800">
              <button
                onClick={handleClick}
                className="rounded-2xl p-2 uppercase text-white font-bold"
              >
                {category}
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Filter;
